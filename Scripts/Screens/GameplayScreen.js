/**
 The GameplayScreen
 
 Author: Alexander Åkerman
 */
        function GameplayScreen()
        {

            /**
             Initialize the GameplayScreen
             */
            this.Init = function()
            {
                this.name = "GameplayScreen";
                g_GameManager = new GameManager();
                g_GameManager.Init();
            }

            /**
             Update the GameplayScreen
             */
            this.Update = function(/**DeltaTime*/ dt, /**bool*/ otherScreenHasFocus, /**bool*/ coveredByOtherScreen)
            {
                this.UpdateGameScreen(dt, otherScreenHasFocus, coveredByOtherScreen);

                if (this.screenState == this.enumScreenState.Active)
                {
                    // Update the game if it's not null
                    if (g_GameManager != null)
                    {
                        g_GameManager.Update(dt);
                    }
                }
            }

            /**
             Draw the GameplayScreen
             */
            this.Draw = function(/**Context*/context2D)
            {
                // Cornflowerblue background!
                context2D.fillStyle = "rgb(" + 100 + "," + 149 + "," + 237 + ")";
                context2D.fillRect(0, 0, g_Width, g_Height);

                // Draw the game if it's not null
                if (g_GameManager != null)
                {
                    g_GameManager.Draw(context2D);
                }
            }

            this.mouseClicked = function()
            {
                g_GameManager.mouseClicked();
            }

        }
GameplayScreen.prototype = new GameScreen;