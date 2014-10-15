
/**
 * 
 * @param {type} imageresource Specifies the imageresource to use
 * @param {type} sx The x coordinate where to start clipping
 * @param {type} sy The y coordinate where to start clipping
 * @param {type} swidth The width of the clipped image
 * @param {type} sheight The height of the clipped image
 * @param {type} width The width of the image to use (stretch or reduce the image)
 * @param {type} height The height of the image to use (stretch or reduce the image)
 * @returns {TileObject}
 */
function Human()
{
    AnimationActor.call(this);
    this.ImageResource = "chicken01";
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 22;
    this.sHeight = 22;
    this.Width = 22;
    this.Height = 22;  

    this.Speed = 20;
    this.DirTimer = 1000;
    this.DirStartTime = 1000;  
    this.Direction = new Vector2(0,0);

    this.Initialize = function()
    {
        this.Offset = new Vector2(15, 22);
        this.AnimationStartTime = 200;
        /*this.AnimationArray.push(new AnimationSet(this.ImageResource, 0, 0, 22, 22, 22, 22));
        this.AnimationArray.push(new AnimationSet(this.ImageResource, 24, 0, 22, 22, 22, 22));
        this.AnimationArray.push(new AnimationSet(this.ImageResource, 47, 0, 22, 22, 22, 22));
        this.AnimationArray.push(new AnimationSet(this.ImageResource, 70, 0, 22, 22, 22, 22));*/
        this.AnimationArray.push(new AnimationSet(this.ImageResource, 118, 0, 22, 22, 22, 22));
        this.AnimationArray.push(new AnimationSet(this.ImageResource, 142, 0, 22, 22, 22, 22));
    };

    this.Initialize();
}


Human.prototype = new AnimationActor();
Human.prototype.Update = function(dt){
    if(this.DirTimer <= this.DirStartTime)
    {
        this.DirTimer += (dt * 1000);
    }else
    {
        this.DirTimer = (this.DirTimer - this.DirStartTime);
        var dir = Math.floor((Math.random() * 9) + 1);
        switch(dir){
            case 1:
                this.Direction.set(dt * this.Speed, 0);
                break;
            case 2:
                this.Direction.set(-(dt * this.Speed), 0);
                break;
            case 3:
                this.Direction.set(0, (dt * this.Speed));
                break;
            case 4:
                this.Direction.set(0, -(dt * this.Speed));
                break;
            case 5:
                this.Direction.set(0,0);
                break;
            case 6:
                this.Direction.set(-(dt * this.Speed), -(dt * this.Speed));
                break;
            case 7:
                this.Direction.set((dt * this.Speed), (dt * this.Speed));
                break;
            case 8:
                this.Direction.set((dt * this.Speed), -(dt * this.Speed));
                break;
            case 9:
                this.Direction.set(-(dt * this.Speed), (dt * this.Speed));
                break;
        }
        //console.log("dt :" + dt + " dir :" + dir + " DirX :" + this.Direction.x + " DirY :" + this.Direction.y);

    }
    //var dirNorm = this.Direction.normalize()

    this.Position.add(this.Direction);

    AnimationActor.prototype.Update.call(this, dt);
}