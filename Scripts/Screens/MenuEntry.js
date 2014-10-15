function MenuEntry()
{
	this.text = "";
	this.position = new Vector2();
	this.clickAble = true;
	this.isSmall = false;
	
	this.m_hitBox = new Rectangle();
	this.m_mouseOver = false;
	this.isSelected = false;
	
	this.m_centered = true;
	
	
	this.mouseClicked = function()
	{
	}
	
	this.screen = null;
	
	this.Init = function(/**string*/text, /**MenuScreen*/screen)
	{
		this.text = text;
		this.screen = screen;
	}
	
	this.Update = function(/**DeltaTime*/ dt)
	{
		
	}
	
	this.Draw = function(/**Context*/context2D)
	{
		if(this.text == "Back")
		{
			this.position.set(55, g_Size.y - 80);
		}
		else if(this.text == ">")
		{
			this.position.set(g_Size.x - 28, g_Size.y - 80);
		}
		else if(this.text == "<")
		{
			this.position.set(g_Size.x - 155, g_Size.y - 80);
		}
		var textSize = context2D.measureText(this.text);
		var halfWidth = textSize.width / 2;
		
		if(this.m_centered)
			this.m_hitBox.set(this.position.x - halfWidth, this.position.y - 15, textSize.width, 30);
		else
			this.m_hitBox.set(this.position.x, this.position.y - 15, textSize.width, 30);
		
		if(this.isSmall)
		{
			this.m_hitBox.top += 7;
			this.m_hitBox.height = 16;
		}

		context2D.fillStyle = '#000';
		context2D.fillText(this.text, this.position.x+2, this.position.y+2);
		//Check if the mouse is on the button
		if (this.m_hitBox.contains(g_Input.mousePosition) && this.clickAble)
		{
			this.m_mouseOver = true;
			context2D.fillStyle = '#f00';
		}
		else if(this.isSelected)
		{
			this.m_mouseOver = false;
			context2D.fillStyle = '#0f0';
		}
		else
		{
			this.m_mouseOver = false;
			context2D.fillStyle = '#fff';
		}
		
				
		context2D.fillText(this.text, this.position.x, this.position.y);
		//context2D.strokeText(this.text, this.position.x, this.position.y);
	}
}