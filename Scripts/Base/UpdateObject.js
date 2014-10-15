/// <reference path="CoreObject.js" />

/**
	UpdateObject
*/
function UpdateObject()
{
	this.active = true;

	this.Update = function(dt)
	{
	    return this.active;
	};
}
UpdateObject.prototype = new CoreObject();