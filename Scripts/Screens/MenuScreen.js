/**
	The MenuScreen
	
	Author: Alexander Åkerman
*/
function MenuScreen()
{
	this.menuEntries = null;
	this.selectedEntry = 0;
	this.menuTitle = "";
	
	/**
		Update the menuentries in the screen
	*/
	this.UpdateMenuEntryLocations = function(left)
	{
		// Make the menu slide into place during transitions, using a
		// power curve to make things look more interesting (this makes
		// the movement slow down as it nears the end).
		var transitionOffset = Math.pow(this.transitionPosition, 2);

		// start at Y = 175; each X value is generated per entry
		if(left)
			var position = new Vector2(340, 300);
		else
			var position = new Vector2(640/2, 390);

		// update each menu entry's location in turn
		for (var i = 0; i < this.menuEntries.items.length; i++)
		{
			var menuEntry = this.menuEntries.items[i];

			if (this.screenState == this.enumScreenState.TransitionOn)
				position.x -= transitionOffset * 256;
			else
				position.x += transitionOffset * 512;
			
			// set the entry's position
			menuEntry.position.set(position.x, position.y);

			// move down for the next entry the size of this entry
			position.y += 40;
		}
	}
	
	this.DrawMenuTitle = function(context2D)
	{
		// Draw the menu title centered on the screen
		var transitionOffset = Math.pow(this.transitionPosition, 2);
		var titlePosition = new Vector2(g_Width / 2, 110);

		titlePosition.y -= transitionOffset * 100;
		
		context2D.fillStyle = '#000';
		context2D.font = "bold 50px Verdana";
		context2D.textAlign = "center";
		context2D.fillText(this.menuTitle, titlePosition.x+3, titlePosition.y+3);
		context2D.fillStyle = '#fff';
		context2D.fillText(this.menuTitle, titlePosition.x, titlePosition.y);
	}
	
	this.DrawAlphaRect = function(context2D)
	{
		context2D.save();
		context2D.globalAlpha = 0.6;
		
		context2D.fillStyle = "#000";
		context2D.fillRect(0, 60, g_Width, g_Height - 120);
		
		context2D.restore();
		
		context2D.fillStyle = "#fff";
		context2D.fillRect(0, 58, g_Width, 4);
		context2D.fillRect(0, 58 + (g_Height - 120), g_Width, 4);
	}
	
	/**
		Update the MenuScreen
	*/
	this.Update = function(/**DeltaTime*/ dt, /**bool*/ otherScreenHasFocus, /**bool*/ coveredByOtherScreen)
	{
		this.UpdateGameScreen(dt, otherScreenHasFocus, coveredByOtherScreen);

		// Update each nested MenuEntry object.
		for (var i = 0; i < this.menuEntries.items.length; i++)
		{
			var isSelected = this.isActive && (i == this.selectedEntry);

			this.menuEntries.items[i].Update(dt);
		}
	}
	
	this.mouseClicked = function()
	{
		// Update each nested MenuEntry object.
		for (var i = 0; i < this.menuEntries.items.length; i++)
		{
			this.menuEntries.items[i].mouseClicked();
		}
	}
}
MenuScreen.prototype = new GameScreen;