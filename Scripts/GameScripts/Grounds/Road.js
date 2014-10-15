
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
 function Road(type)
 {
    this.ImageResource = "road01";
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
    } else if (type == 3)
    {
        this.sX = 128;
        this.sY = 0;
    } 
    this.sWidth = 64;
    this.sHeight = 64;
    this.PositionX = 0;
    this.PositionY = 0;
    this.Width = 64;
    this.Height = 64;
    this.PositionSet = false;
    TileObject.call(this, this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.Width, this.Height);

    this.Draw = function(context2D, x, y)
    {

        this.PositionX = x;
        this.PositionY = y;
        this.PositionSet = true;
        TileObject.prototype.Draw.call(this, context2D, x, y);
        //context2D.drawImage(this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.PositionX, this.PositionY, this.Width, this.Height);
    };

    this.Update = function(dt)
    {
        //this.prototype.Update(dt);
    };
}


//Road.prototype = new TileObject();
Road.prototype.constructor = TileObject;