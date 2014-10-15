/// <reference path="UpdateObject.js" />

/**
	DrawObject
*/
function DrawObject()
{
	this.hidden = false;

	this.Draw = function()
	{
	    return this.hidden;
	};
}
DrawObject.prototype = new UpdateObject();