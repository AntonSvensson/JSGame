/**
	The CreditScreen
	
	Author: Alexander Åkerman
*/
function MainMenuScreen() {
    /**
		Initialize the MainMenuScreen
	*/
    this.Init = function () {
        this.name = "MainMenuScreen";

        this.menuEntries = new List();

        var playGameEntry = new MenuEntry();
        playGameEntry.Init("Play Game", this);
        playGameEntry.mouseClicked = this.playGameSelected;
        playGameEntry.m_centered = false;

        var instructionsEntry = new MenuEntry();
        instructionsEntry.Init("Instructions", this);
        instructionsEntry.mouseClicked = this.instructionsSelected;
        instructionsEntry.m_centered = false;

        var creditsEntry = new MenuEntry();
        creditsEntry.Init("Credits", this);
        creditsEntry.mouseClicked = this.creditsSelected;
        creditsEntry.m_centered = false;


        this.menuEntries.add(playGameEntry);
        this.menuEntries.add(instructionsEntry);
        this.menuEntries.add(creditsEntry);
    }

    /**
		Draw the LoadingScreen
	*/
    this.Draw = function (/**Context*/context2D) {
        // make sure our entries are in the right place before we draw them
        this.UpdateMenuEntryLocations(true);

        context2D.font = "bold 30px Verdana";
        context2D.textAlign = "left";
        // Draw each menu entry in turn.
        for (var i = 0; i < this.menuEntries.items.length; i++) {
            var menuEntry = this.menuEntries.items[i];

            var isSelected = this.isActive && (i == this.selectedEntry);

            menuEntry.Draw(context2D);
        }

        this.DrawMenuTitle(context2D);
    }

    this.playGameSelected = function () {
        if (this.m_mouseOver) {
            this.screen.ExitScreen();

            var newScreens = new generic.List();
            newScreens.add(new GameplayScreen());

            var loading = new LoadingScreen();
            loading.Load(3, newScreens, [{ name: 'testiso', src: 'Content/Graphic/testiso.png' }]);

            //g_ScreenManager.AddScreen(new CharacterCreateScreen());
        }
    }

    this.instructionsSelected = function () {
        if (this.m_mouseOver) {
            this.screen.ExitScreen();
            g_ScreenManager.AddScreen(new InstructionScreen());
        }
    }

    this.creditsSelected = function () {
        if (this.m_mouseOver) {
            this.screen.ExitScreen();
            g_ScreenManager.AddScreen(new CreditScreen());
        }
    }
}
MainMenuScreen.prototype = new MenuScreen;