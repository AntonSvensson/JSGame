/**
	Button class for the menues
*/
function Button()
{
	//Image normal
	this.m_image = null;
	//Image as the mouse is over
	this.m_imageHover = null;

	this.m_postion = null;
	this.m_hitBox = null;
	
	this.m_mouseOver = null;
	
	/**
		Constructor. Initaite the button
	*/
	this.init = function(/*string*/ img, /*string*/ imgHover, /*Vector2*/ pos)
	{
		this.m_postion = new Vector2().set(pos.x, pos.y);
		
		this.m_image = img;
		this.m_imageHover = imgHover;
		
		this.m_hitBox = new Rectangle().set(this.m_postion.x, this.m_postion.y, this.m_image.width, this.m_image.height);		
		this.m_mouseOver = false;

		return this;
	}
	
	/**
		Update the Button
	*/
	this.update = function(dt)
	{
		//Check if the mouse is on the button
		if(this.m_hitBox.contains(g_GameObjectManager.m_mousePos))
			this.m_mouseOver = true;	
		else 
			this.m_mouseOver = false;
	}
	
	/**
		Draw the button
	*/
	this.draw = function(context)
	{		
		if(this.m_mouseOver)
			context.drawImage(this.m_imageHover, this.m_postion.x, this.m_postion.y);
		else
			context.drawImage(this.m_image, this.m_postion.x, this.m_postion.y);
		
	}
}