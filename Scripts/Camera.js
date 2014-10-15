/**
 A manager for all the objects in the game
 */
function Camera(squaresDown, squaresAcross)
{
    this.Position = new Vector2(0, 0);
    this.Speed = 1000;
    this.MouseSpeed = 5;
    this.Mouse_Start_Position = new Vector2(0, 0);
    this.Mouse_End_Position = new Vector2(0, 0);
    this.Mouse_Start_Set = false;
    this.newPosition = new Vector2(0, 0);
    this.CameraMoved = false;
    this.CameraMoving = false;
    this.OldMousePosition = new Vector2(0, 0);
    this.SquaresDown = squaresDown;
    this.SquaresAcross = squaresAcross;
    this.LimitCameraView = true;

    this.Update = function(/** DeltaTime*/ dt)
    {
        if (g_Input.isNewKeyDown(Keys.X.value)) {
            this.LimitCameraView = !this.LimitCameraView;
        }

        if (g_Input.isKeyDown(Keys.D.value)) {
            this.Position.x = this.Position.x + parseInt((dt * this.Speed));
        }

        if (g_Input.isKeyDown(Keys.A.value)) {

            this.Position.x = this.Position.x - parseInt((dt * this.Speed));

        }

        if (g_Input.isKeyDown(Keys.W.value)) {
            this.Position.y = this.Position.y - parseInt((dt * this.Speed));

        }

        if (g_Input.isKeyDown(Keys.S.value)) {
            this.Position.y = this.Position.y + parseInt((dt * this.Speed));
        }
        //this.LimitCamera();

        if (g_Input.isNewMouseButtonDown(MouseButtons.Left.value))
        {
            this.Mouse_Start_Position.x = g_Input.mousePosition.x + this.Position.x;
            this.Mouse_Start_Position.y = g_Input.mousePosition.y + this.Position.y;
            return;
        }

        if (!g_Input.isMouseButtonDown(MouseButtons.Left.value))
            return;

        var pos = new Vector2(g_Input.mousePosition.x + this.Position.x - this.Mouse_Start_Position.x, g_Input.mousePosition.y + this.Position.y - this.Mouse_Start_Position.y);
        var move = new Vector2(pos.x * this.MouseSpeed, pos.y * this.MouseSpeed);


        this.MoveTowards(dt, move.x, move.y);
    }

    this.LimitCamera = function() {
        if (this.LimitCameraView)
        {
            var maxX = this.SquaresAcross * 64;
            if ((this.Position.x + 640) > maxX - 32)
                this.Position.x = maxX - 640 - 32;

            if (this.Position.x <= 0)
                this.Position.x = 0;

            if (this.Position.y <= 0)
                this.Position.y = 0;

            var maxY = parseInt(this.SquaresDown * 0.5) * 32;
            if ((this.Position.y + 480) > maxY - 32)
                this.Position.y = maxY - 480 - 32;
        }
    }

    this.MoveTowards = function(dt, x, y)
    {
        this.Position.x = this.Position.x - dt * x;
        this.Position.y = this.Position.y - dt * y;
    }


}
