/**
	Rectangle class, used for hitboxes
*/
function Rectangle()
{
    this.left = 0;
    this.top = 0;
    this.width = 0;
    this.height = 0;

    /**
       Constructor that initialises the object
     */
    this.set = function(/**Number*/ left, /**Number*/ top, /**Number*/ width, /**Number*/ height)
    {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        return this;
    }

    /**
		Checks if the rectangle intersects another
     */
    this.intersects = function(/**Rectangle*/ other)
    {

        if (this.left + this.width < other.left)
            return false;

        if (this.top + this.height < other.top)
            return false;

        if (this.left > other.left + other.width)
            return false;

        if (this.top > other.top + other.height)
            return false;

        return true;

    }
	
	/**
		Checks if a position is inside the rectangle
	*/
	this.contains = function(/**Vector2*/ pos)
    {

        if (this.left + this.width < pos.x)
            return false;

        if (this.top + this.height < pos.y)
            return false;

        if (this.left > pos.x)
            return false;

        if (this.top > pos.y)
            return false;

        return true;

    }
	
	/**
		Draws the rectangle as a red box. Used for debuging purposes
	*/
	this.draw = function(/**Context2D*/ context)
	{
		context.save();
		//Set the color
		context.fillStyle = 'rgb('+255+','+0+','+0+')'; 
		
		//Draw the rectangle
		context.fillRect(this.left, this.top, this.width, this.height);
		
		context.restore();
	}

}