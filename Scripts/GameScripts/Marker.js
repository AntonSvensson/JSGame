function Marker()
{
    this.ImageResource = g_ResourceManager.images["marker"];
    this.sX = 0;
    this.sY = 0;
    this.sWidth = 64;
    this.sHeight = 64;
    this.Position = new Vector2();
    this.Width = 64;
    this.Height = 64;
    this.PositionSet = false;
    
    this.Draw = function(context2D)
    {
        context2D.drawImage(this.ImageResource, this.sX, this.sY, this.sWidth, this.sHeight, this.Position.x, this.Position.y, this.Width, this.Height);
    };

    this.Update = function(dt)
    {
        
    };

    this.SetPosition = function(pos)
    {
        this.Position = pos;
    };
}
