
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
function Woodcutter()
{
    this.ImageResourceName = "woodcutter";
    this.sX = 64;
    this.sY = 128;
    this.sWidth = 64;
    this.sHeight = 64;
    this.Width = 64;
    this.Height = 64;
    Building.call(this, this.ImageResourceName, this.sX, this.sY, this.sWidth, this.sHeight, this.Width, this.Height);
}

Woodcutter.prototype.constructor = Building;
Woodcutter.prototype.Draw = function(context2D, x, y){
    Building.prototype.Draw.call(this, context2D, x, y);
}
Woodcutter.prototype.Update = function(dt){
    Building.prototype.Update.call(this, dt);
}