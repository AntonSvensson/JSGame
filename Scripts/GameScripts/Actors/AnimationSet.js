/**
 * 
 * @param {type} imageresource Specifies the imageresource to use
 * @param {type} sx The x coordinate where to start clipping
 * @param {type} sy The y coordinate where to start clipping
 * @param {type} swidth The width of the clipped image
 * @param {type} sheight The height of the clipped image
 * @param {type} width The width of the image to use (stretch or reduce the image)
 * @param {type} height The height of the image to use (stretch or reduce the image)
 */
function AnimationSet(imageresource, sx, sy, swidth, sheight, width, height)
{
    this.ImageResource = g_ResourceManager.images[imageresource];
    this.sX = sx;
    this.sY = sy;
    this.sWidth = swidth;
    this.sHeight = sheight;
    this.Width = width;
    this.Height = height;
}
