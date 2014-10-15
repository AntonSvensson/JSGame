/**
	The GameScreen
	
	Author: Alexander Åkerman
*/
function GameScreen()
{
	this.name = "GameScreen";
	
	this.enumScreenState = {"TransitionOn" : 0, "Active" : 1, "TransitionOff" : 2, "Hidden" : 3}; //--> Screenstate enums
	this.screenState = this.enumScreenState.TransitionOn;
		
	this.transitionOnTime = 0; //--> In milliseconds
	this.transitionOffTime = 0;  //--> In milliseconds
	this.transitionPosition = 1;
	this.transitionAlpha = function()
	{
		var result = 1 - this.transitionPosition;
		return result;
	}
	
	this.isPopup = false;
	this.isExiting = false;
	this.otherScreenHasFocus = false;
	this.isActive = function()
	{
		var result = !this.otherScreenHasFocus && 
					 (this.screenState == enumScreenState.TransitionOn || 
					  this.screenState == enumScreenState.Active);
					  
		return result;
	}
	
	/**
		Update the GameScreen
	*/
	this.UpdateGameScreen = function(/**DeltaTime*/ dt, /**bool*/ otherScreenHasFocus, /**bool*/ coveredByOtherScreen)
	{
		this.otherScreenHasFocus = otherScreenHasFocus;

		if (this.isExiting)
		{
			// If the screen is going away to die, it should transition off.
			this.screenState = this.enumScreenState.TransitionOff;

			if (!this.UpdateTransition(dt, this.transitionOffTime, 1))
			{
				// When the transition finishes, remove the screen.
				g_ScreenManager.RemoveScreen(this);
			}
		}
		else if (coveredByOtherScreen)
		{
			// If the screen is covered by another, it should transition off.
			if (this.UpdateTransition(dt, this.transitionOffTime, 1))
			{
				// Still busy transitioning.
				this.screenState = this.enumScreenState.TransitionOff;
			}
			else
			{
				// Transition finished!
				this.screenState = this.enumScreenState.Hidden;
			}
		}
		else
		{
			// Otherwise the screen should transition on and become active.
			if (this.UpdateTransition(dt, this.transitionOnTime, -1))
			{
				// Still busy transitioning.
				this.screenState = this.enumScreenState.TransitionOn;
			}
			else
			{
				// Transition finished!
				this.screenState = this.enumScreenState.Active;
			}
		}
	}
	
	/**
		Update the transition of the GameScreen
	*/
	this.UpdateTransition = function(/**DeltaTime*/dt, /**Number*/time, /**Number*/direction)
	{
		// How much should we move by?
		var transitionDelta;

		if (time <= 0)
			transitionDelta = 1;
		else
			transitionDelta = dt * 1000 / time;

		// Update the transition position.
		this.transitionPosition += transitionDelta * direction;

		// Did we reach the end of the transition?
		if (((direction < 0) && (this.transitionPosition <= 0)) ||
			((direction > 0) && (this.transitionPosition >= 1)))
		{
			this.transitionPosition = Math.max(0, Math.min(1, this.transitionPosition));
			return false;
		}

		// Otherwise we are still busy transitioning.
		return true;
	}
	
	/**
		Exit the GameScreen
	*/
	this.ExitScreen = function()
	{
		if (this.TransitionOffTime <= 0)
		{
			// If the screen has a zero transition time, remove it immediately.
			g_ScreenManager.RemoveScreen(this);
		}
		else
		{
			// Otherwise flag that it should transition off and then exit.
			this.isExiting = true;
		}
	}
	
	this.mouseClicked = function()
	{
	}
}