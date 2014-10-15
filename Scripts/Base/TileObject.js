
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
function TileObject(imageresource, sx, sy, swidth, sheight, width, height)
{
    this.ImageResource = g_ResourceManager.images[imageresource];
    this.sX = sx;
    this.sY = sy;
    this.sWidth = swidth;
    this.sHeight = sheight;
    this.Position = new Vector2();
    this.Width = width;
    this.Height = height;
    this.PositionSet = false;
    this.Origin = new Vector2(swidth * 0.5, sheight - 16);
    this.Walkable = true;
}


//TileObject.prototype.constructor = DrawObject;
TileObject.prototype.Draw = function(context2D, x, y){
    this.Position.set(x, y);
    context2D.drawImage(this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.Position.x, this.Position.y, this.Width, this.Height);
}
