

function DefineMouseButtons()
{
	var buttons = DefineEnum(
	{
		Left : 
		{
			value : 1,
			string : 'left'
		},
		Middle : 
		{
			value : 2,
			string : 'middle'
		},
		Right : 
		{
			value : 3,
			string : 'right'
		}
	});
	
	return buttons;
}
var MouseButtons = DefineMouseButtons();