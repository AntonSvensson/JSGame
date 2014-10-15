/**
 A manager for all the objects in the game
 */
function GameManager() {
    // An array of game objects 
    this.FrameManager = new FrameManager();

    this.gameObjects = new Array();
    this.SquaresDown = 128;//70
    this.SquaresAcross = 64;//32

    this.camera = new Camera(this.SquaresDown, this.SquaresAcross);
    this.TileMap = new TileMap(this, this.SquaresDown, this.SquaresAcross);

    this.Marker = new Marker();

    this.MouseTileX = 0;
    this.MouseTileY = 0;

    this.Delta = 0;


    /**
     Initialize the game
     */
    this.Init = function() {
        //var d = document.getElementById('Debug');

        this.FrameManager.CreateFrame("Background1", 10, 10, 150, 100);
    };
    this.SortGameObjects = function(a,b){
        if(a.PositionY < b.PositionY)
            return -1;
        if(a.PositionY > b.PositionY)
            return 1;
        return 0;
    };

    this.Update = function(/** DeltaTime*/ dt) {
        this.Delta = dt;
        this.camera.Update(dt);
        this.CalculateMouseTiles();
        this.Marker.Update(dt);
        this.gameObjects.sort(this.SortGameObjects);
        for(i = 0;i < this.gameObjects.length;i++){
            this.gameObjects[i].Update(dt);
        }
        if(this.MouseTileX > 0 && this.MouseTileX < (this.SquaresAcross * 2) && this.MouseTileY > 0 && this.MouseTileY < this.SquaresDown)
        {
            var VectorXY = this.ConvertMouseTilesToMap(this.MouseTileX, this.MouseTileY);
            var pos = this.TileMap.TileObjects[VectorXY.y][VectorXY.x].Position;
            this.Marker.SetPosition(pos);
        }
        if (g_Input.isNewKeyDown(Keys.R.value)) {
            this.TileMap.DrawAllTiles = !this.TileMap.DrawAllTiles;
        }
        if (g_Input.isNewKeyDown(Keys.Z.value)) {
            this.camera.Position = new Vector2(0, 0);
        }


        if (g_Input.isNewKeyDown(Keys.U.value)) {
            var VectorXY = this.ConvertMouseTilesToMap(this.MouseTileX, this.MouseTileY);
            this.TileMap.TileObjects[VectorXY.y][VectorXY.x] = new Woodcutter();
        }
        /*if (g_Input.isNewKeyDown(Keys.T.value)) {
            var VectorXY = this.ConvertMouseTilesToMap(this.MouseTileX, this.MouseTileY);
            this.TileMap.TileObjects[VectorXY.y][VectorXY.x] = new Road(1);
        }
        if (g_Input.isNewKeyDown(Keys.G.value)) {
            var VectorXY = this.ConvertMouseTilesToMap(this.MouseTileX, this.MouseTileY);
            this.TileMap.TileObjects[VectorXY.y][VectorXY.x] = new Road(2);
        }*/
        if (g_Input.isNewKeyDown(Keys.F.value)) {
            for(var i = 0;i < 100;i++)
            {
                var VectorXY = this.ConvertMouseTilesToMap(this.MouseTileX, this.MouseTileY);
                var pos = this.TileMap.TileObjects[VectorXY.y][VectorXY.x].Position;
                var origin = this.TileMap.TileObjects[VectorXY.y][VectorXY.x].Origin;
                var human = new Human();
                human.Position = new Vector2(pos.x + origin.x + this.camera.Position.x, pos.y + origin.y + this.camera.Position.y);
                this.gameObjects.push(human);
            }
            
        }



    };

    /**
     The render loop
     */
    this.Draw = function(/** Context*/ context2D) {
        context2D.fillStyle = '#000';
        
        this.TileMap.Draw(context2D);
       
        this.Marker.Draw(context2D);
        
        for(i = 0;i < this.gameObjects.length;i++){
            this.gameObjects[i].Draw(context2D, parseInt(this.camera.Position.x), parseInt(this.camera.Position.y));
        }
        this.FrameManager.Draw(context2D);
         
        if (g_DEBUG)
        {
            
            context2D.fillText('Map Size: ' + this.SquaresDown + ' x ' + this.SquaresAcross, 20, 30);
            context2D.fillText('Tiles Drawn: ' + this.TileMap.TilesDrawn + '/' + this.TileMap.TotalTiles, 20, 50);
            context2D.fillText('MouseTile X: ' + this.MouseTileX, 20, 70);
            context2D.fillText('MouseTile Y: ' + this.MouseTileY, 20, 90);
            context2D.fillText('GameObjects: ' + this.gameObjects.length, 20, 110);
            context2D.fillText('Delta: ' + ((this.Delta) * 1000).toPrecision(4) + " ms", 20, 130);
            //console.log('Delta: ' + ((this.Delta) * 1000).toPrecision(4) + " ms");
            //context2D.fillText('Draw All Tiles: ' + this.TileMap.DrawAllTiles, 20, 40);
            //context2D.fillText('Camera X: ' + this.camera.Position.x, 10, 140);
            //context2D.fillText('LimitCameraView: ' + this.camera.LimitCameraView, 10, 140);
            //context2D.fillText('TotalTilesLoop: ' + this.TileMap.TotalTilesLoop, 20, 50);
            //context2D.fillText('Camera Y: ' + this.camera.Position.y, 10, 150);
            
            //context2D.fillText('IsMouseMoving: ' + g_Input.GetIsMouseMoving(), 10, 180);

            //context2D.fillText('Press R to enable/disable the drawing of all tiles.', 10, 450);
            //context2D.fillText('Press Z to reset the Camera to 0,0.', 10, 460);
            //context2D.fillText('Press X to enable/disable Camera out of bounds limit.', 10, 470);
        }
        this.TileMap.ResetTilesDrawn();
    };

    this.ConvertMouseTilesToMap = function(x,y){
        var newX = x;
        if((x % 2) == 0)
            newX = parseInt(newX / 2);
        else
            newX = parseInt((newX - 1) / 2);
        var newY = y;
        return new Vector2(newX, newY);
    }

    this.CalculateMouseTiles = function() {
        m_x = (g_Input.mousePosition.x + this.camera.Position.x) % 32;
        m_y = (g_Input.mousePosition.y + this.camera.Position.y) % 16;
        this.MouseTileX = Math.floor((g_Input.mousePosition.x + this.camera.Position.x) / 32);
        this.MouseTileY = Math.floor((g_Input.mousePosition.y + this.camera.Position.y) / 16);

        if (this.MouseTileX % 2 == this.MouseTileY % 2) {
            if (m_x + (m_y * 2) > 32) {
                this.MouseTileX++;
                this.MouseTileY++;
            }
        } else {
            if (-m_x + (m_y * 2) < 0) {
                this.MouseTileX++;
            }
            else {
                this.MouseTileY++;
            }
        }
    }

}