
function TileMap(gameManager, squaresDown, squaresAcross) {
    this.TileObjects = new Array();
    this.TileObjectList = new Array();
    this.GameManager = gameManager;

    this.TilesDrawn = 0;
    this.DrawAllTiles = false;
    this.TotalTiles = 0;



    this.tile_width = 64;
    this.tile_height = 32;
    this.tile_StepX = 64;
    this.tile_StepY = 16;
    this.OddRowXOffset = 32;

    this.baseOffsetX = -32;
    this.baseOffsetY = -48;

    this.SquaresDown = squaresDown;
    this.SquaresAcross = squaresAcross;

    this.StartOffsetX = 0;
    this.StartOffsetY = 0;

    this.TotalTilesLoop = 0;




    this.Draw = function(context2D)
    {
        this.CalculateStartOffset();

        var squareOffset = new Vector2(this.GameManager.camera.Position.x, this.GameManager.camera.Position.y);
        var offsetX = parseInt(squareOffset.x);
        var offsetY = parseInt(squareOffset.y);

        var ScreenTilesHeight = parseInt(g_Height / (this.tile_height * 0.5)) + 3;
        ScreenTilesHeight += this.StartOffsetY;
        ScreenTilesHeight = Math.min(this.GameManager.SquaresDown, ScreenTilesHeight);

        var ScreenTilesWidth = parseInt(g_Width / this.tile_width) + 3;
        ScreenTilesWidth += this.StartOffsetX;
        ScreenTilesWidth = Math.min(this.GameManager.SquaresAcross, ScreenTilesWidth);

        this.StartOffsetX = Math.max(this.StartOffsetX, 0);
        this.StartOffsetY = Math.max(this.StartOffsetY, 0);

        for (y = this.StartOffsetY; y < ScreenTilesHeight; y++) {
            var rowOffset = 0;
            if (y % 2 == 1)
                rowOffset = this.OddRowXOffset;

            for (x = this.StartOffsetX; x < ScreenTilesWidth; x++) {
                var posx = (x * this.tile_StepX) - offsetX + rowOffset + this.baseOffsetX;
                var posy = (y * this.tile_StepY) - offsetY + this.baseOffsetY;


                this.TilesDrawn = this.TilesDrawn + 1;
                var obj = this.TileObjects[y][x];
                if(obj != undefined){
                    obj.Draw(context2D, posx, posy);
                }

                this.TotalTilesLoop = this.TotalTilesLoop + 1;
            }

        }

        /*
        for (y = 0; y < this.TileObjects.length; y++) {

            var rowOffset = 0;

            if (firstY < 0)
                firstY = 0;

            if (y % 2 == 1)
                rowOffset = this.OddRowXOffset;

            for (x = 0; x < this.TileObjects[y].length; x++) {
                var posx = (x * this.tile_StepX) - offsetX + rowOffset + this.baseOffsetX;
                var posy = (y * this.tile_StepY) - offsetY + this.baseOffsetY;

                if (posx < 1920 && posx > -64 && posy < 1080 && posy > -64 || this.DrawAllTiles) {
                    this.TilesDrawn = this.TilesDrawn + 1;
                    this.TileObjects[y][x].Draw(context2D, posx, posy);
                }
            }
        }
        */
    };

    this.CalculateStartOffset = function() {
        m_x = (this.GameManager.camera.Position.x) % 64;
        m_y = (this.GameManager.camera.Position.y) % 32;
        this.StartOffsetX = Math.floor((this.GameManager.camera.Position.x) / 64);
        this.StartOffsetY = Math.floor((this.GameManager.camera.Position.y) / 16);

        /*if (this.StartOffsetX % 2 == this.StartOffsetY % 2) {
            if (m_x + (m_y * 2) > 64) {
                this.StartOffsetX++;
                this.StartOffsetY++;
            }
        } else {
            if (-m_x + (m_y * 2) < 0) {
                //this.StartOffsetX++;
            }
            else {
                //this.StartOffsetY++;
            }
        }*/
    }


    this.ResetTilesDrawn = function()
    {
        this.TilesDrawn = 0;
        this.TotalTilesLoop = 0;
    }
    this.randomizeMap = function(height, width) {
        this.TileObjects = new Array();
        for (i = 0; i < width; i++) {
            this.TileObjects[i] = new Array();
            for (j = 0; j < height; j++) {
                this.TotalTiles = this.TotalTiles + 1;
                var tile;
                //switch (Math.floor((Math.random() * 9)))
                if(i < 6 || j < 2)
                    tile = new Tree(1);
                else
                    tile = new Ground();
                /*switch (0)
                {
                    case 0:
                    tile = new Ground();
                    break;
                    case 3:
                    tile = new Woodcutter();
                    break;
                    case 4:
                    tile = new TileObject("testiso", 64, 64, 64, 64, 64, 64);
                    break;
                    case 6:
                    tile = new TileObject("testiso", 0, 128, 64, 64, 64, 64);
                    break;
                    case 7:
                    tile = new TileObject("testiso", 64, 128, 64, 64, 64, 64);
                    break;
                    case 8:
                    tile = new TileObject("testiso", 128, 128, 64, 64, 64, 64);
                    break;
                    default:
                    tile = new TileObject("testiso", 0, 0, 64, 64, 64, 64);
                    break;
                }*/


                tile.Position = new Vector2();
                this.TileObjects[i].push(tile);
                //this.TileObjects[i].push(Math.floor((Math.random() * 3)));
            }
        }
    };

    this.randomizeMap(this.SquaresAcross, this.SquaresDown);

}
