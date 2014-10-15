/**
A 2D Vector class
*/
function Vector2(x, y)
{
    //The vectors coordinates
    this.x = (x == undefined) ? 0 : x ;
    this.y = (y == undefined) ? 0 : y ;

    /**
    Sets the vectors coordinates
    */
    this.set = function(/*Number*/x, /*Number*/y)
    {
        this.x = x;
        this.y = y;
    }

    /**
    Adds two vectors
    */
    this.add = function(/*Vector2*/other)
    {
        this.x += other.x;
        this.y += other.y;
    }

    /**
    Checks if the vector equals another
    */
    this.equals = function(/*Vector2*/other)
    {
        return other.x == this.x && other.y == this.y;
    }

    /**
    Returns the length of the vector
    */
    this.length = function()
    {
        var lth = Math.sqrt((this.x * this.x) + (this.y * this.y));
        return lth;
    }

    /**
    Returns a normailzed vector
    */
    this.normalize = function()
    {
        
        if(this.x == 0 && this.y == 0)
            return this;

        //var vec = new Vector2();

        var vecX = this.x / this.length();
        var vecY = this.y / this.length();
        this.set(vecX, vecY);
        return this;
    }

    /**
    Returns the dot product of the vectors
    */
    this.dot = function(/*Vector2*/other)
    {
        return (this.x * other.x) + (this.y * other.y);
    }

    /**
    Returns the distance of the vectors
    */
    this.distance = function(/*Vector2*/other)
    {
        var X = other.x - this.x;
        var Y = other.y - this.y;
        var dist = Math.sqrt((X * X) + (Y * Y));
        return dist;
    }

    /**
    alerts the vectors coordinates
    */
    this.alert = function()
    {
        alert("x: " + this.x + " y: " + this.y);
    }
}