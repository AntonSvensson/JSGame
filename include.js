function IncludeJavaScript(jsFile)
{
    document.write('<script type="text/javascript" src="'
    + jsFile + '"></script>');
}

// Include Handlers
//IncludeJavaScript("Scripts/pixi.dev.js");
IncludeJavaScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
IncludeJavaScript("Scripts/Helpers/jquery.resizeStop.js");
// Include Helpers
IncludeJavaScript("Scripts/Helpers/MathHelper.js");
IncludeJavaScript("Scripts/Helpers/Rectangle.js");
IncludeJavaScript("Scripts/Helpers/Vector2.js");
IncludeJavaScript("Scripts/Helpers/List.js");
IncludeJavaScript("Scripts/Helpers/Utils.js");
IncludeJavaScript("Scripts/Helpers/Enum.js");
IncludeJavaScript("Scripts/Helpers/Keys.js");
IncludeJavaScript("Scripts/Helpers/MouseButtons.js");

// Include BaseObjects
IncludeJavaScript("Scripts/Base/CoreObject.js");
IncludeJavaScript("Scripts/Base/UpdateObject.js");
IncludeJavaScript("Scripts/Base/DrawObject.js");

//Tech
IncludeJavaScript("Scripts/Camera.js");

// Other
IncludeJavaScript("Scripts/Base/FrameObject.js");

// Include Menu

// Screens
IncludeJavaScript("Scripts/Screens/GameScreen.js");
IncludeJavaScript("Scripts/Screens/MenuEntry.js");
IncludeJavaScript("Scripts/Screens/MenuScreen.js");
IncludeJavaScript("Scripts/Screens/LoadingScreen.js");
IncludeJavaScript("Scripts/Screens/BackgroundScreen.js");
IncludeJavaScript("Scripts/Screens/GameplayScreen.js");
IncludeJavaScript("Scripts/Screens/MainMenuScreen.js");
IncludeJavaScript("Scripts/ScreenManager.js");



// Map
IncludeJavaScript("Scripts/Base/TileObject.js");
IncludeJavaScript("Scripts/Base/TileMap.js");
IncludeJavaScript("Scripts/GameScripts/Marker.js");

// GameMechanics
IncludeJavaScript("Scripts/GameScripts/Grounds/Ground.js");
IncludeJavaScript("Scripts/GameScripts/Buildings/Building.js");
IncludeJavaScript("Scripts/GameScripts/Grounds/Tree.js");
IncludeJavaScript("Scripts/GameScripts/Grounds/Road.js");
IncludeJavaScript("Scripts/GameScripts/Buildings/Woodcutter.js");

//Actors
IncludeJavaScript("Scripts/GameScripts/Actors/AnimationSet.js");
IncludeJavaScript("Scripts/GameScripts/Actors/AnimationActor.js");
IncludeJavaScript("Scripts/GameScripts/Actors/Human/Human.js");

// Include Game
IncludeJavaScript("Scripts/SoundManager.js");
IncludeJavaScript("Scripts/ResourceManager.js");
IncludeJavaScript("Scripts/InputManager.js");
IncludeJavaScript("Scripts/FrameManager.js");
IncludeJavaScript("Scripts/GameManager.js");
IncludeJavaScript("Scripts/Game.js");
IncludeJavaScript("Scripts/Main.js");


