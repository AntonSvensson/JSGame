/**
	The LoadingScreen
	
	Author: Alexander Åkerman
*/
function LoadingScreen()
{	
	this.minLoadingTimer = 0;
	this.loadingTimer = 0;
	this.animationTimer = 0;
    this.otherScreensAreGone = false;
    this.screensToLoad = null;
	
	this.resourcesLoaded = false;
	
	/**
		Initialize the LoadingScreen
	*/
	this.Init = function()
	{
		this.name = "LoadingScreen";
	}
	
	/**
		Load other screens in the game.
	*/
	this.Load = function(/**Time to load(Seconds)*/loadingTimer, /**The screens to load*/screensToLoad, /**The resources to load*/resourcesToload)
	{
		for(var i = 0; i < g_ScreenManager.screens.items.length; i++)
		{
			g_ScreenManager.screens.items[i].ExitScreen();
		}
		
		if(resourcesToload != null)
		{
			g_ResourceManager.addResources(resourcesToload);
		}
		else
		{
			this.resourcesLoaded = true;
		}
		
		this.minLoadingTimer = loadingTimer;
        this.screensToLoad = screensToLoad;
		
		g_ScreenManager.AddScreen(this);
		
		return this;
	}
	
	/**
		Update the LoadingScreen
	*/
	this.Update = function(/**DeltaTime*/ dt, /**bool*/ otherScreenHasFocus, /**bool*/ coveredByOtherScreen)
	{
		this.UpdateGameScreen(dt, otherScreenHasFocus, coveredByOtherScreen);
		
		//Checks if resource manager finished loading everything
		if(!this.resourcesLoaded)
		{
			var numLoaded = 0;
            for (i = 0; i < g_ResourceManager.imageProperties.length; ++i)
            {
                if (g_ResourceManager[g_ResourceManager.imageProperties[i]].complete)
                    numLoaded++;
            }
			
			//If done
            if ( numLoaded == g_ResourceManager.imageProperties.length )
            {
				this.resourcesLoaded = true;
            }
		}
		
		if ((this.screenState == this.enumScreenState.Active) &&
			(g_ScreenManager.screens.items.length == 1))
		{
			this.otherScreensAreGone = true;
		}
		
		if (this.otherScreensAreGone && this.resourcesLoaded)
		{
			this.loadingTimer += dt;
			
			if(this.loadingTimer >= this.minLoadingTimer)
			{
				for(var i = 0; i < this.screensToLoad.items.length; i++)
				{
					if(this.screensToLoad.items[i] != null)
					{
						g_ScreenManager.AddScreen(this.screensToLoad.items[i]);
					}
				}
				
				g_ScreenManager.RemoveScreen(this);
			}
		}
	}
	
	/**
		Draw the LoadingScreen
	*/
	this.Draw = function(/**Context*/context2D)
	{
		var message = "Loading";
		// Animate the number of dots after our "Loading..." message.
		this.animationTimer += SECONDS_BETWEEN_FRAMES;
		
		var dotCount = (this.animationTimer * 1.5) % 10;
		if(dotCount > 4)
		{
			this.animationTimer = 0;
			var dotCount = (this.animationTimer * 1.5) % 10;
		}
		
		for(var i = 0; i < dotCount; i++)
		{
			message += ".";
		}
		
		//context2D.drawImage(g_ResourceManager.background, 0, 0);
		
		context2D.fillStyle = "#000";
		context2D.fillRect (0, 0, g_Width, g_Height);		
		
		context2D.font = "bold 18px Verdana";
		context2D.textAlign = "left";
		context2D.fillStyle = '#000';
		context2D.fillText(message, g_Width / 2 - 30+2, g_Height - 120+2);
		context2D.fillStyle = '#fff';
		context2D.fillText(message, g_Width / 2 - 30, g_Height - 120);
	}
}
LoadingScreen.prototype = new GameScreen;