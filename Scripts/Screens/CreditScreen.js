/**
	The CreditScreen
	
	Author: Alexander Åkerman
*/
function CreditScreen()
{
	/**
		Initialize the CreditScreen
	*/
	this.Init = function()
	{
		// Setup name and title
		this.menuTitle = "Credits";
		this.name = "CreditScreen";
		
		// Create the menuentries
		this.menuEntries = new generic.List();
		
		var programmers = new MenuEntry();
		programmers.Init("Programmers:");
		programmers.clickAble = false;
		
		var alexander = new MenuEntry();
		alexander.Init("Alexander Åkerman");
		alexander.isSmall = true;
		//alexander.clickAble = false;
		alexander.mouseClicked = this.alexSelected;
		
		var fredrik = new MenuEntry();
		fredrik.Init("Fredrik Brundin");
		fredrik.isSmall = true;
		//fredrik.clickAble = false;
		fredrik.mouseClicked = this.fredrikSelected;
		
		var graphics = new MenuEntry();
		graphics.Init("Graphics:");
		graphics.clickAble = false;
		
		var anton = new MenuEntry();
		anton.Init("Anton Wikström");
		anton.isSmall = true;
		//anton.clickAble = false;
		anton.mouseClicked = this.antonSelected;
		
		var music = new MenuEntry();
		music.Init("Music:");
		music.clickAble = false;
		
		var ola = new MenuEntry();
		ola.Init("Ola Blissing");
		ola.isSmall = true;
		//ola.clickAble = false;
		ola.mouseClicked = this.olaSelected;
		
		var designer = new MenuEntry();
		designer.Init("Handyman:");
		designer.clickAble = false;
		
		var kellroe = new MenuEntry();
		kellroe.Init("Marcus Kellner");
		kellroe.isSmall = true;
		//kellroe.clickAble = false;
		kellroe.mouseClicked = this.kellroeSelected;
		
		var backEntry = new MenuEntry();
		backEntry.Init("Back", this);
		backEntry.mouseClicked = this.backSelected;
		
		// Add the entries to the list.
		this.menuEntries.add(programmers);
		this.menuEntries.add(alexander);
		this.menuEntries.add(fredrik);
		
		this.menuEntries.add(music);
		this.menuEntries.add(ola);
		
		this.menuEntries.add(graphics);
		this.menuEntries.add(anton);
		
		this.menuEntries.add(designer);
		this.menuEntries.add(kellroe);
		
		this.menuEntries.add(backEntry);
	}
	
	/**
		Draw the CreditScreen
	*/
	this.Draw = function(/**Context*/context2D)
	{
		this.DrawAlphaRect(context2D);
		
		// make sure our entries are in the right place before we draw them
		this.UpdateMenuEntryLocations(false);
		
		var pos = new Vector2();
		pos.set(0, 150);
		context2D.textAlign = "center";
		// Draw each menu entry in turn.
		for (var i = 0; i < this.menuEntries.items.length; i++)
		{
			if(i == 0 || i == 3 || i == 5 || i == 7 || i == 9)
			{
				context2D.font = "bold 24px Verdana";
				if(i == 3)
				{
					pos.y += 8;
				}
				else if(i == 5)
				{
					pos.y += 8;
				}
				else if(i == 7)
				{
					pos.y += 8;
				}
			}
			else
			{
				context2D.font = "bold 16px Verdana";
			}
			
			var menuEntry = this.menuEntries.items[i];

			menuEntry.position.y = pos.y;
			menuEntry.Draw(context2D);
			
			pos.y += 24;
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
	
	this.alexSelected = function()
	{
		if(this.m_mouseOver)
		{
			window.open('http://alexanderakerman.wordpress.com');
		}
	}
	
	this.fredrikSelected = function()
	{
		if(this.m_mouseOver)
		{
			window.open('http://momeka.com');
		}
	}
	
	this.olaSelected = function()
	{
		if(this.m_mouseOver)
		{
			window.open('http://www.bxi.se/');
		}
	}
	
	this.antonSelected = function()
	{
		if(this.m_mouseOver)
		{
			window.open('http://shownd.com/antonwikstrom');
		}
	}
	
	this.kellroeSelected = function()
	{
		if(this.m_mouseOver)
		{
			window.open('http://www.junglefriendzy.com');
		}
	}
}
CreditScreen.prototype = new MenuScreen;