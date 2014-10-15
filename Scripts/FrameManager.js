function FrameManager() {

    this.Frames = [];



    this.CreateFrame = function(name, x, y, width, height) {
        var newFrame = new Frame(name, x, y, width, height);
        this.Frames.push(newFrame);
    };

    this.Draw = function(context2D) {
        for (i = 0; i < this.Frames.length; i++) {
            this.Frames[i].Draw(context2D);
        }
    };

}

function Frame(name, x, y, width, height) {
    this.Name = name;
    this.PositionX = x;
    this.PositionY = y;
    //this.Texts = [];
    this.FrameObjects = [];

    this.FrameObjects.push(new FrameObject("full-frame", 0, 0, 16, 16, 16, 16, x, y));
    this.FrameObjects.push(new FrameObject("full-frame", 16, 0, 16, 16, width, 16, x + 16, y));
    this.FrameObjects.push(new FrameObject("full-frame", 32, 0, 16, 16, 16, 16, x+width + 16, y));

    this.FrameObjects.push(new FrameObject("full-frame", 0, 16, 16, 16, 16, height, x, y + 16));
    this.FrameObjects.push(new FrameObject("full-frame", 16, 16, 16, 16, width, height, x + 16, y + 16));
    this.FrameObjects.push(new FrameObject("full-frame", 32, 16, 16, 16, 16, height,x+ width + 16, y + 16));

    this.FrameObjects.push(new FrameObject("full-frame", 0, 32, 16, 16, 16, 16, x ,y + height + 16));
    this.FrameObjects.push(new FrameObject("full-frame", 16, 32, 16, 16, width, 16, x + 16, y + height + 16));
    this.FrameObjects.push(new FrameObject("full-frame", 32, 32, 16, 16, 16, 16, x + width + 16, y + height + 16));

    this.Draw = function(context2D)
    {
        if (g_DEBUG)
        {
            for (j = 0; j < this.FrameObjects.length; j++) {
                this.FrameObjects[j].Draw(context2D);
            }
        }

    };
}

