/**
 * 
 * @param {type} sx The x coordinate where to start clipping
 * @param {type} sy The y coordinate where to start clipping
 * @param {type} swidth The width of the clipped image
 * @param {type} sheight The height of the clipped image
 * @param {type} width The width of the image to use (stretch or reduce the image)
 * @param {type} height The height of the image to use (stretch or reduce the image)
 * @param {type} x Position X
 * @param {type} y Position Y
 * @returns {TileObject}
 */
function FrameObject(imgres, sx, sy, swidth, sheight, width, height, x, y)
{
    this.PositionX = x;
    this.PositionY = y;
    this.sX = sx;
    this.sY = sy;
    this.sWidth = swidth;
    this.sHeight = sheight;
    this.Width = width;
    this.Height = height;
    this.ImageResource = g_ResourceManager.images[imgres];
    
    this.Draw = function(context2D){
            context2D.drawImage(this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.PositionX, this.PositionY, this.Width, this.Height);
    };
}
this.FrameObject.prototype = new DrawObject();
