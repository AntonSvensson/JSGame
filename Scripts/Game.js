/// <reference path="Main.js" />
/// <reference path="InputManager.js" />
/// <reference path="ResourceManager.js" />
/// <reference path="SoundManager.js" />
/// <reference path="Helpers/List.js" />

// target frames per second  
var FPS = 60;
// time between frames 
var MILLISECONDS_BETWEEN_FRAMES = (1 / FPS) * 1000;


var g_StartScale;
var g_StartWidth;
var g_StartHeight;

var g_Scale;
var g_Width;
var g_Height;


var g_DEBUG = true;
var g_Game = null;
var g_GameManager = null;
function DrawLoop()
{
    requestAnimationFrame(DrawLoop);
    g_Game.draw();
}
function Game()
{

    //The time that the last frame was rendered  
    this.lastFrame = Date.now();
    // A reference to the canvas element  
    this.canvas = null;
    //A reference to the 2D context of the canvas element
    this.context2D = null;

    this.objectList = new List();

    /**
    Initialize the game
    */
    this.run = function()
    {
        // set the global pointer to reference this object
        g_Game = this;

        this.init();

        // use setInterval to call the gameloop function 
        setInterval(function() { g_Game.gameLoop(); }, MILLISECONDS_BETWEEN_FRAMES);
        DrawLoop();
        return this;
    }


    this.init = function()
    {
        //this.setupSize(1920, 1080, 1, 1);
        this.setupSizeFullscreen();
        this.setupCanvas();

        g_Input = new InputManager();
        g_Input.init(this.canvas);

        this.loadContent();
    }

    this.loadContent = function()
    {
        g_ResourceManager = new ResourceManager();
        //g_ResourceManager.init([{ name: 'background', src: 'Content/Graphic/background.png', type: ResourceTypes.image}]);
        //g_ResourceManager.init([{ name: 'testiso', src: 'Content/Graphic/testiso.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'woodcutter', src: 'Content/Graphic/woodcutter.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'ground01', src: 'Content/Graphic/ground01.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'tree01', src: 'Content/Graphic/tree01.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'road01', src: 'Content/Graphic/road01.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'chicken01', src: 'Content/Graphic/chicken01.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'marker', src: 'Content/Graphic/marker.png', type: ResourceTypes.image }]);
        g_ResourceManager.init([{ name: 'full-frame', src: 'Content/Graphic/Frame/full-frame.png', type: ResourceTypes.image }]);

        var audio = new Audio();
        var canPlayogg = audio.canPlayType('audio/ogg');
        var musicpath = 'Content/Music/';
        var soundpath = 'Content/Sound/';
        var extension = "";

        if (canPlayogg)
        {
            musicpath += 'ogg/';
            soundpath += 'ogg/';
            extension = '.ogg';
        }
        else
        {
            musicpath += 'mp3/';
            soundpath += 'mp3/';
            extension = '.mp3';
        }

        //g_ResourceManager.addResources([
        //{ name: 'kill', src: soundpath + 'kill' + extension, type: ResourceTypes.sound },
        //{ name: 'title', src: musicpath + 'title' + extension, type: ResourceTypes.song },
        //{ name: 'battle', src: musicpath + 'battle' + extension, type: ResourceTypes.song}]);

        g_SoundManager = new SoundManager();
        g_SoundManager.init();

        new ScreenManager().Init();

        // Activate the first screens.
        g_ScreenManager.AddScreen(new GameplayScreen());
    }

    this.setupSize = function(width, height, scaleX, scaleY)
    {
        g_StartWidth = width;
        g_StartHeight = height;
        g_StartScale = new Vector2(scaleX, scaleY);

        g_Width = width;
        g_Height = height;
        g_Scale = new Vector2(scaleX, scaleY);

        document.getElementById('content').style.width = g_Width + "px";

    }

    this.setupSizeFullscreen = function()
    {
        //document.getElementById('canvas').style.width = "100%";
        //document.getElementById('canvas').style.height = "100%";

        g_StartWidth = window.innerWidth;
        g_StartHeight = window.innerHeight;
        g_StartScale = new Vector2(1, 1);

        g_Width = g_StartWidth;
        g_Height = g_StartHeight;
        g_Scale = new Vector2(1, 1);

        $.resizestop.threshold = 200;

        $(window).bind('resizestop', function (e) { 
            this.canvas.width = e.data.size.width;
            this.canvas.height = e.data.size.height;
        });
    }

    this.setupCanvas = function()
    {
        // get references to the canvas elements and their 2D contexts
        this.canvas = document.getElementById('canvas');
        this.context2D = this.canvas.getContext('2d');

        this.context2D.scale(g_Scale.x, g_Scale.y);
        this.canvas.width = g_Width;
        this.canvas.height = g_Height;
    }

    this.gameLoop = function()
    {
        // calculate the time since the last frame
        var thisFrame = Date.now();
        var dt = ((thisFrame - this.lastFrame) * 0.001);
        this.lastFrame = thisFrame;

        this.update(dt);

        //this.draw(this.context2D);
    }

    this.update = function(dt)
    {
        if (g_ResourceManager.isLoaded)
        {
            g_Height = window.innerHeight;
            g_Width = window.innerWidth;
            
            g_Input.update(dt);
            g_SoundManager.update(dt);
            g_ScreenManager.Update(dt);
            
            if (g_Input.isNewKeyDown(Keys.Q.value))
                    g_DEBUG = !g_DEBUG;
                
            if (g_DEBUG)
            {
                /*var mousetxt =
                "X: " + g_Input.mousePosition.x +
                " Y: " + g_Input.mousePosition.y +
                " Left: " + g_Input.isMouseButtonDown(MouseButtons.Left.value) +
                " Middle: " + g_Input.isMouseButtonDown(MouseButtons.Middle.value) +
                " Right: " + g_Input.isMouseButtonDown(MouseButtons.Right.value);

                document.getElementById("mouse").innerHTML = mousetxt;*/
            }
        }
    }

    /**
    The Render loop
    */
    this.draw = function()
    {
        //// clear the drawing contexts
        //context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //// Cornflowerblue background!
        //context2D.fillStyle = "rgb(" + 100 + "," + 149 + "," + 237 + ")";
        //context2D.fillRect(0, 0, g_Width, g_Height);

        //if (g_ResourceManager.isLoaded)
        //{
        //    context2D.drawImage(g_ResourceManager.images.background, 0, 0, g_Width / 2, g_Height / 2, 0, 0, g_Width / 2, g_Height / 2);
        //}
        //else
        //{
        //    this.context2D.fillStyle = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
        //    this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //    this.context2D.font = "bold 12px sans-serif";
        //    this.context2D.fillStyle = '#ff0000';
        //    this.context2D.fillText("Loading.", 10, 460);
        //}

        if (!g_ResourceManager.isLoaded) {
            this.context2D.fillStyle = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
            this.context2D.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context2D.font = "bold 12px sans-serif";
            this.context2D.fillStyle = '#ff0000';
            this.context2D.fillText("Loading.", 10, 460);
            return;
        }
        else {
            g_ScreenManager.Draw(this.context2D);
            //requestAnimationFrame(draw);
        }
    }

    this.SetFullScreen = function(value, allowInput)
    {
        if (value)
        {
            if (!RunPrefixMethod(document, "FullScreen", null) || !RunPrefixMethod(document, "IsFullScreen", null))
            {
                if (allowInput)
                    RunPrefixMethod(this.canvas, "RequestFullScreen", Element.ALLOW_KEYBOARD_INPUT);
                else
                    RunPrefixMethod(this.canvas, "RequestFullScreen", null);
            }
        }
        else
        {
            if (RunPrefixMethod(document, "FullScreen", null) || RunPrefixMethod(document, "IsFullScreen", null))
                RunPrefixMethod(document, "CancelFullScreen", null);
        }
    }

    this.ToggleFullScreen = function(allowInput)
    {
        if (RunPrefixMethod(document, "FullScreen", null) || RunPrefixMethod(document, "IsFullScreen", null))
            RunPrefixMethod(document, "CancelFullScreen", null);
        else
        {
            if (allowInput)
                RunPrefixMethod(this.canvas, "RequestFullScreen", Element.ALLOW_KEYBOARD_INPUT);
            else
                RunPrefixMethod(this.canvas, "RequestFullScreen", null);
        }
    }


    var lastUsedHeap = 0;  // remember the heap size
 
    this.checkMemory = function()
    {
        // check if the heap size is this cycle is LESS than what we had last
        // cycle; if so, then the garbage collector has kicked in
     
        if (window.performance.memory.usedJSHeapSize < lastUsedHeap)
            console.log('Garbage collected!');
        lastUsedHeap = window.performance.memory.usedJSHeapSize;
    }
     
    setInterval(this.checkMemory, 1000); // test 10 times per second
}


