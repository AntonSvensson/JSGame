/**
	The InstructionScreen
	
	Author: Alexander Åkerman
*/
function InstructionScreen()
{
	this.numberOfInstructions = 9;
	this.selectedInstruction = 1;
	this.instructions = null;
	
	/**
		Initialize the InstructionScreen
	*/
	this.Init = function()
	{
		this.menuTitle = "Instructions";
		this.name = "InstructionScreen";
		
		this.menuEntries = new generic.List();
		
		this.instructions = new generic.List();
		this.instructions.add(new Array("Welcome brave adventurer!",
										" ",
										"A great evil has set upon this land and you have to ",
										"clear ten dungeons, unite all of the 32 Crystals of Peace",
										"and rescue six virgins before the Evil Gate of Doom opens.",
										" ",
										"Nah just kidding, this is a simple grinding game. No sweat.",
										"Choose a class, kill monsters and grab the loot.",
										"You know the drill."));


		this.instructions.add(new Array("Use the WASD keys to move around on the world map",
										"Move close to an NPC and Click on them to talk.",
										" ",
										"You will encounter monsters in the wild when you least expect it.",
										"If you die you will drop some of your equipped items and",
										"respawn in town. This is bad, so try to stay alive.",
										" ",
										"You also need to check your number of Action Points (AP).",
										"Your AP is used to use your Skills, wich are",
										"advanced attacks your heroes learn as they level up."));

		this.numberOfInstructions = this.instructions.items.length;
		
		var backEntry = new MenuEntry();
		backEntry.Init("Back", this);
		backEntry.mouseClicked = this.backSelected;
		
		var nextEntry = new MenuEntry();
		nextEntry.Init(">", this);
		nextEntry.mouseClicked = this.nextSelected;
		
		var prevEntry = new MenuEntry();
		prevEntry.Init("<", this);
		prevEntry.mouseClicked = this.prevSelected;
		
		this.menuEntries.add(backEntry);
		this.menuEntries.add(nextEntry);
		this.menuEntries.add(prevEntry);
	}
	
	/**
		Draw the InstructionScreen
	*/
	this.Draw = function(/**Context*/context2D)
	{
		this.DrawAlphaRect(context2D);
		
		// make sure our entries are in the right place before we draw them
		this.UpdateMenuEntryLocations();
		
		context2D.font = "bold 30px Verdana";
		context2D.textAlign = "center";
		// Draw each menu entry in turn.
		for (var i = 0; i < this.menuEntries.items.length; i++)
		{
			var menuEntry = this.menuEntries.items[i];

			menuEntry.position.y -= 80;
			menuEntry.Draw(context2D);
		}
		
		var pos = new Vector2();	
		context2D.textAlign = "center";	
		
		pos.set(g_Width - 92, g_Height - 80);
		context2D.fillStyle = '#000';
		context2D.fillText(this.selectedInstruction+"/"+this.numberOfInstructions, pos.x+2, pos.y+2);
		context2D.fillStyle = '#fff';
		context2D.fillText(this.selectedInstruction+"/"+this.numberOfInstructions, pos.x, pos.y);
		
		context2D.font = "16px Verdana";
		pos.set(g_Width / 2, 170);
		if(this.selectedInstruction == 2)
		{
			pos.y -= 10;
		}
		for(var i = 0; i < this.instructions.items[this.selectedInstruction-1].length; i++)
		{
			context2D.fillStyle = '#000';
			context2D.fillText(this.instructions.items[this.selectedInstruction-1][i], pos.x+1, pos.y+1);
			context2D.fillStyle = '#fff';
			context2D.fillText(this.instructions.items[this.selectedInstruction-1][i], pos.x, pos.y);
			pos.y += 20;
		}
		
		this.DrawMenuTitle(context2D);
	}
	
	this.backSelected = function()
	{
		if(this.m_mouseOver)
		{
			this.screen.ExitScreen();
			g_ScreenManager.AddScreen(new MainMenuScreen());
		}
	}
	
	this.nextSelected = function()
	{
		if(this.m_mouseOver)
		{
			this.screen.selectedInstruction+=1;
			if(this.screen.selectedInstruction > this.screen.numberOfInstructions)
			{
				this.screen.selectedInstruction = 1;
			}
		}
	}
	
	this.prevSelected = function()
	{
		if(this.m_mouseOver)
		{
			this.screen.selectedInstruction-=1;
			if(this.screen.selectedInstruction < 1)
			{
				this.screen.selectedInstruction = this.screen.numberOfInstructions;
			}
		}
	}
}
InstructionScreen.prototype = new MenuScreen;