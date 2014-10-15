/**
    ScreenManager
*/
function ScreenManager()
{
	this.screens = new List(); 			// List of screens
	this.screensToUpdate = new List(); 	// List of screens to update
	
	this.isInitialized = false;
    this.traceEnabled = false;
	
	this.Init = function(/**Array*/ screens)
    {
		g_ScreenManager = this;
		
        this.isInitialized = true;
        return this;
    }
	
	this.Update = function(/** DeltaTime */ dt)
	{
		this.screensToUpdate.clear();
		
		for(var i = 0; i < this.screens.items.length; i++)
		{
			this.screensToUpdate.add(this.screens.items[i]);
		}
		
		var otherScreenHasFocus = false;
        var coveredByOtherScreen = false;
		
		//document.getElementById("Screen").innerHTML = "";
		// Loop as long as there are screens waiting to be updated.
		while (this.screensToUpdate.items.length > 0)
		{
			// Pop the topmost screen off the waiting list.
			var screen = this.screensToUpdate.items[this.screensToUpdate.items.length - 1];

			this.screensToUpdate.removeAt(this.screensToUpdate.items.length - 1);

			// Update the screen.
			//document.getElementById("Screen").innerHTML += screen.name + ";";
			screen.Update(dt, otherScreenHasFocus, coveredByOtherScreen);

			if (screen.screenState == screen.enumScreenState.TransitionOn ||
				screen.screenState == screen.enumScreenState.Active)
			{
				// If this is the first active screen we came across,
				// give it a chance to handle input.
				if (!otherScreenHasFocus)
				{
					//screen.HandleInput(input);

					otherScreenHasFocus = true;
				}

				// If this is an active non-popup, inform any subsequent
				// screens that they are covered by it.
				if (!screen.isPopup)
					coveredByOtherScreen = true;
			}
		}
	}
	
	this.Draw = function(/** Context*/ context2D)
	{
		for(var i = 0; i < this.screens.items.length; i++)
		{
			var screen = this.screens.items[i];
			
			if (screen.screenState == screen.enumScreenState.Hidden)
				continue;

			screen.Draw(context2D);
		}
	}
	

	this.AddScreen = function(/** Screen*/ screen)
	{
		// If we have a graphics device, tell the screen to load content.
		if (this.isInitialized)
		{
			screen.Init();
			//document.getElementById("Debug").innerHTML += screen.name + ";";
		}
		screen.isExiting = false;
		this.screens.add(screen);
	}

	this.RemoveScreen = function(/** Screen*/ screen)
	{
		this.screens.remove(screen);
		this.screensToUpdate.remove(screen);
	}
	
	this.mouseClicked = function()
	{
		for(var i = 0; i < this.screens.items.length; i++)
		{
			this.screens.items[i].mouseClicked();
		}
	}
}



