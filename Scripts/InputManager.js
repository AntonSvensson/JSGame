/// <reference path="Helpers/Enum.js" />
/// <reference path="Helpers/MouseButtons.js" />
/// <reference path="Helpers/Keys.js" />
/// <reference path="Helpers/Vector2.js" />
/// <reference path="Helpers/List.js" />
/// <reference path="Base/UpdateObject.js" />

        /**
         Handles inputs for the game.
         
         Author: Alexander Åkerman
         */

        var g_Input = null;
function InputManager()
{
    //Array with all the keys
    this.m_currentPressedKeys = new Array();
    this.m_previousPressedKeys = new Array();
    this.newPressedKeys = new List();
    this.newReleasedKeys = new List();

    // Array with mousebuttons
    this.m_currentPressedButtons = new Array();
    this.m_previousPressedButtons = new Array();
    this.newPressedButtons = new List();
    this.newReleasedButtons = new List();



    // Mouseposition
    this.mousePosition = new Vector2(0, 0);
    this.init = function(canvas)
    {
        var i = 0;
        // Keyboard
        for (i = 0; i < Keys.length; i++)
        {
            this.m_currentPressedKeys[Keys.enums[i]] = false;
            this.m_previousPressedKeys[Keys.enums[i]] = false;
        }

        // Keys.forEach(function(key)
        // {
        // g_Input.m_currentPressedKeys[key.value] = false;
        // g_Input.m_previousPressedKeys[key.value] = false;
        // });

        document.onkeydown = function(event) {
            g_Input.keyDown(event);
        }
        document.onkeyup = function(event) {
            g_Input.keyReleased(event);
        }

        // Mouse
        for (i = 0; i < MouseButtons.length; i++)
        {
            this.m_currentPressedButtons[MouseButtons.enums[i]] = false;
            this.m_previousPressedButtons[MouseButtons.enums[i]] = false;
        }

        // MouseButtons.forEach(function(button)
        // {
        // g_Input.m_currentPressedButtons[button.value] = false;
        // g_Input.m_previousPressedButtons[button.value] = false;
        // });

        canvas.onmousemove = function(event) {
            g_Input.mouseMove(canvas, event);
        }
        canvas.onmousedown = function(event) {
            g_Input.mouseDown(canvas, event);
        }
        canvas.onmouseup = function(event) {
            g_Input.mouseUp(canvas, event);
        }
        canvas.oncontextmenu = function(event) {
            return false;
        }
    }

    this.update = function(dt)
    {
        var i = 0;
        // Keyboard
        for (i = 0; i < this.m_currentPressedKeys.length; i++)
            this.m_previousPressedKeys[i] = this.m_currentPressedKeys[i];

        if (this.newReleasedKeys.length > 0)
        {
            for (i = 0; i < this.newReleasedKeys.length; i++)
                this.m_currentPressedKeys[this.newReleasedKeys.items[i]] = false;

            this.newReleasedKeys.clear();
        }

        if (this.newPressedKeys.length > 0)
        {
            for (i = 0; i < this.newPressedKeys.length; i++)
                this.m_currentPressedKeys[this.newPressedKeys.items[i]] = true;
            this.newPressedKeys.clear();
        }

        // Mouse
        for (i = 0; i < this.m_currentPressedButtons.length; i++)
            this.m_previousPressedButtons[i] = this.m_currentPressedButtons[i];

        if (this.newReleasedButtons.items.length > 0)
        {
            for (i = 0; i < this.newReleasedButtons.length; i++)
                this.m_currentPressedButtons[this.newReleasedButtons.items[i]] = false;
            this.newReleasedButtons.clear();
        }

        if (this.newPressedButtons.items.length > 0)
        {
            for (i = 0; i < this.newPressedButtons.length; i++)
                this.m_currentPressedButtons[this.newPressedButtons.items[i]] = true;
            this.newPressedButtons.clear();
        }
    }

    ////////////////////////////////////////////////////////////////////
    ///////////////////////////// Keyboard /////////////////////////////
    ////////////////////////////////////////////////////////////////////
    this.keyDown = function(ev)
    {
        var keyCode;
        if (ev.keyCode)
            keyCode = ev.keyCode;
        else if (ev.which)
            keyCode = ev.which;

        this.newPressedKeys.add(keyCode);
    }

    this.keyReleased = function(ev)
    {
        var keyCode;
        if (ev.keyCode)
            keyCode = ev.keyCode;
        else if (ev.which)
            keyCode = ev.which;

        this.newReleasedKeys.add(keyCode);
    }

    this.isKeyDown = function(keyCode)
    {
        return this.m_currentPressedKeys[keyCode];
    }

    this.isKeyUp = function(keyCode)
    {
        return !this.m_currentPressedKeys[keyCode];
    }

    this.isNewKeyDown = function(keyCode)
    {
        return this.m_currentPressedKeys[keyCode] && !this.m_previousPressedKeys[keyCode];
    }

    this.isNewKeyUp = function(keyCode)
    {
        return !this.m_currentPressedKeys[keyCode] && this.m_previousPressedKeys[keyCode];
    }


    ///////////////////////////////////////////////////////////////////
    ////////////////////////////// Mouse //////////////////////////////
    ///////////////////////////////////////////////////////////////////
    /**
     Event for when the mouse is moved
     */
    this.mouseMove = function(canvas, ev)
    {
        var rect = canvas.getBoundingClientRect(), root = document.documentElement;

        this.mousePosition.x = ev.clientX - rect.left - root.scrollLeft;
        this.mousePosition.y = ev.clientY - rect.top - root.scrollTop;
    }

    this.mouseDown = function(canvas, ev)
    {
        var button;
        if (ev.which)
            button = ev.which;
        else if (ev.button)
            button = ev.button;

        this.newPressedButtons.add(button);
    }

    this.mouseUp = function(canvas, ev)
    {
        var button;
        if (ev.which)
            button = ev.which;
        else if (ev.button)
            button = ev.button;

        this.newReleasedButtons.add(button);
    }

    this.isMouseButtonDown = function(button)
    {
        return this.m_currentPressedButtons[button];
    }

    this.isMouseButtonUp = function(button)
    {
        return !this.m_currentPressedButtons[button];
    }

    this.isNewMouseButtonDown = function(button)
    {
        return this.m_currentPressedButtons[button] && !this.m_previousPressedButtons[button];
    }

    this.isNewMouseButtonUp = function(button)
    {
        return !this.m_currentPressedButtons[button] && this.m_previousPressedButtons[button];
    }
}
InputManager.prototype = new UpdateObject();