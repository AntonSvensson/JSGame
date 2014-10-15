
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
function AnimationActor()
{
    this.Position = new Vector2();
    this.Offset = new Vector2();
    this.AnimationArray = Array();
    this.AnimationIndex = 0;
    this.AnimationTimer = 0; 
    this.AnimationStartTime = 500; //Each frame. MS.
}

AnimationActor.prototype.Draw = function(context2D, camx, camy){
    if(this.AnimationArray.length == 0)
        return;
    var set = this.AnimationArray[this.AnimationIndex];
    context2D.drawImage(set.ImageResource, set.sX, set.sY, set.sWidth, set.sHeight, this.Position.x - camx - this.Offset.x, this.Position.y - camy - this.Offset.y, set.Width, set.Height);
}
AnimationActor.prototype.Update = function(dt){
    if(this.AnimationArray.length <= 1)
        return;
    if(this.AnimationTimer <= this.AnimationStartTime)
    {
        this.AnimationTimer += (dt * 1000);
    }else{
        this.AnimationTimer = (this.AnimationTimer - this.AnimationStartTime);
        if(this.AnimationArray.length - 1 > this.AnimationIndex)
            this.AnimationIndex++;
        else
            this.AnimationIndex = 0;
    }
    
}