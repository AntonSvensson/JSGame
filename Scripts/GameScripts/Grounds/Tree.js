
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
 function Tree(type)
 {
    this.ImageResource = "tree01";
    this.sX = 0;
    this.sY = 0;
    if (type == 1) 
    {
        this.sX = 0;
        this.sY = 0;
    } else if (type== 2)
    {
        this.sX = 64 ;
        this.sY = 0;
    }
    this.sWidth = 64;
    this.sHeight = 64;
    this.Width = 64;
    this.Height = 64;
    TileObject.call(this, this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.Width, this.Height);

    this.Draw = function(context2D, x, y)
    {
        TileObject.prototype.Draw.call(this, context2D, x, y);
    };

    this.Update = function(dt)
    {
        //this.prototype.Update(dt);
    };
}


//Tree.prototype = new TileObject();
Tree.prototype.constructor = TileObject;