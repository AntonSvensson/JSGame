/**
	The BackgroundScreen
	
	Author: Alexander Åkerman
*/
function BackgroundScreen()
{
	/**
		Initialize the BackgroundScreen
	*/
	this.Init = function()
	{
		this.name = "BackgroundScreen";
	}
	
	/**
		Update the BackgroundScreen
	*/
	this.Update = function(/**DeltaTime*/ dt, /**bool*/ otherScreenHasFocus, /**bool*/ coveredByOtherScreen)
	{
		this.UpdateGameScreen(dt, otherScreenHasFocus, false);
	}
	
	/**
		Draw the BackgroundScreen
	*/
	this.Draw = function(/**Context*/context2D)
	{
		context2D.drawImage(g_ResourceManager.images["background"], 0, 0);
	}
}
BackgroundScreen.prototype = new GameScreen;