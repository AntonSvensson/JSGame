/**
	CoreObject, keeping an unique ID for every object in the game
*/
var currentID = 0;
function CoreObject()
{
	this.uniqueID;

	this.init = function()
	{
	    this.uniqueID = calculateID();
	    return this;
	};
	
	function calculateID(id)
	{
		var id = currentID;
		currentID++;
		return id;
	};
}