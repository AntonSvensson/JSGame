function DefineKeys()
{
	var keys = DefineEnum(
	{
		Backspace : 
		{
			value : 8,
			string : 'backspace'
		},
		Tab : 
		{
			value : 9,
			string : 'tab'
		},
		Enter : 
		{
			value : 13,
			string : 'enter'
		},
		Shift : 
		{
			value : 16,
			string : 'shift'
		},
		Ctrl : 
		{
			value : 17,
			string : 'ctrl'
		},
		Alt : 
		{
			value : 18,
			string : 'alt'
		},
		Pause : 
		{
			value : 19,
			string : 'pause'
		},
		Break : 
		{
			value : 19,
			string : 'break'
		},
		CapsLock : 
		{
			value : 20,
			string : 'capslock'
		},
		Esc : 
		{
			value : 27,
			string : 'esc'
		},
		Space : 
		{
			value : 32,
			string : 'space'
		},
		PageUp : 
		{
			value : 33,
			string : 'pageup'
		},
		PageDown : 
		{
			value : 34,
			string : 'pagedown'
		},
		End : 
		{
			value : 35,
			string : 'end'
		},
		Home : 
		{
			value : 36,
			string : 'home'
		},
		Left : 
		{
			value : 37,
			string : 'left'
		},
		Up : 
		{
			value : 38,
			string : 'up'
		},
		Right : 
		{
			value : 39,
			string : 'right'
		}
		,
		Down : 
		{
			value : 40,
			string : 'down'
		},
		Insert : 
		{
			value : 45,
			string : 'insert'
		},
		Delete : 
		{
			value : 46,
			string : 'delete'
		},
		D0 : 
		{
			value : 48,
			string : '0'
		}
		,
		D1 : 
		{
			value : 49,
			string : '1'
		}
		,
		D2 : 
		{
			value : 50,
			string : '2'
		}
		,
		D3 : 
		{
			value : 51,
			string : '3'
		}
		,
		D4 : 
		{
			value : 52,
			string : '4'
		}
		,
		D5 : 
		{
			value : 53,
			string : '5'
		}
		,
		D6 : 
		{
			value : 54,
			string : '6'
		}
		,
		D7 : 
		{
			value : 55,
			string : '7'
		}
		,
		D8 : 
		{
			value : 56,
			string : '8'
		},
		D9 : 
		{
			value : 57,
			string : '9'
		},
		A : 
		{
			value : 65,
			string : 'a'
		},
		B : 
		{
			value : 66,
			string : 'b'
		},
		C : 
		{
			value : 67,
			string : 'c'
		},
		D : 
		{
			value : 68,
			string : 'd'
		},
		E : 
		{
			value : 69,
			string : 'e'
		},
		F : 
		{
			value : 70,
			string : 'f'
		},
		G : 
		{
			value : 71,
			string : 'g'
		},
		H : 
		{
			value : 72,
			string : 'h'
		},
		I : 
		{
			value : 73,
			string : 'i'
		},
		J : 
		{
			value : 74,
			string : 'j'
		},
		K : 
		{
			value : 75,
			string : 'k'
		},
		L : 
		{
			value : 76,
			string : 'l'
		},
		M : 
		{
			value : 77,
			string : 'm'
		},
		N : 
		{
			value : 78,
			string : 'n'
		},
		O : 
		{
			value : 79,
			string : 'o'
		},
		P : 
		{
			value : 80,
			string : 'p'
		},
		Q : 
		{
			value : 81,
			string : 'q'
		},
		R : 
		{
			value : 82,
			string : 'r'
		},
		S : 
		{
			value : 83,
			string : 's'
		},
		T : 
		{
			value : 84,
			string : 't'
		},
		U : 
		{
			value : 85,
			string : 'u'
		},
		V : 
		{
			value : 86,
			string : 'v'
		},
		W : 
		{
			value : 87,
			string : 'w'
		},
		X : 
		{
			value : 88,
			string : 'x'
		},
		Y : 
		{
			value : 89,
			string : 'y'
		},
		Z : 
		{
			value : 90,
			string : 'z'
		},
		Select : 
		{
			value : 93,
			string : 'select'
		},
		Numpad0 : 
		{
			value : 96,
			string : 'numpad0'
		},
		Numpad1 : 
		{
			value : 97,
			string : 'numpad1'
		},
		Numpad2 : 
		{
			value : 98,
			string : 'numpad2'
		},
		Numpad3 : 
		{
			value : 99,
			string : 'numpad3'
		},
		Numpad4 : 
		{
			value : 100,
			string : 'numpad4'
		},
		Numpad5 : 
		{
			value : 101,
			string : 'numpad5'
		},
		Numpad6 : 
		{
			value : 102,
			string : 'numpad6'
		},
		Numpad7 : 
		{
			value : 103,
			string : 'numpad7'
		},
		Numpad8 : 
		{
			value : 104,
			string : 'numpad8'
		},
		Numpad9 : 
		{
			value : 105,
			string : 'numpad9'
		},
		Multiply : 
		{
			value : 106,
			string : 'multiply'
		},
		Add : 
		{
			value : 107,
			string : 'add'
		},
		Subtract : 
		{
			value : 109,
			string : 'subtract'
		},
		Decimal : 
		{
			value : 110,
			string : 'decimal'
		},
		Divide : 
		{
			value : 111,
			string : 'divide'
		},
		F1 : 
		{
			value : 112,
			string : 'F1'
		},
		F2 : 
		{
			value : 113,
			string : 'F2'
		},
		F3 : 
		{
			value : 114,
			string : 'F3'
		},
		F4 : 
		{
			value : 115,
			string : 'F4'
		},
		F5 : 
		{
			value : 116,
			string : 'F5'
		},
		F6 : 
		{
			value : 117,
			string : 'F6'
		},
		F7 : 
		{
			value : 118,
			string : 'F7'
		},
		F8 : 
		{
			value : 119,
			string : 'F8'
		},
		F9 : 
		{
			value : 120,
			string : 'F9'
		},
		F10 : 
		{
			value : 121,
			string : 'F10'
		},
		F11 : 
		{
			value : 122,
			string : 'F11'
		},
		F12 : 
		{
			value : 123,
			string : 'F12'
		},
		NumLock : 
		{
			value : 144,
			string : 'numlock'
		},
		ScrollLock : 
		{
			value : 145,
			string : 'scrolllock'
		},
		SemiColon : 
		{
			value : 186,
			string : 'semicolon'
		},
		Equal : 
		{
			value : 187,
			string : 'equal'
		},
		Comma : 
		{
			value : 188,
			string : 'comma'
		},
		Dash : 
		{
			value : 189,
			string : 'dash'
		},
		Period : 
		{
			value : 190,
			string : 'period'
		},
		ForwardSlash : 
		{
			value : 191,
			string : 'fowardslash'
		},
		GraveAccent : 
		{
			value : 192,
			string : 'graveaccent'
		},
		OpenBracket : 
		{
			value : 219,
			string : 'openbracket'
		},
		BackSlash : 
		{
			value : 220,
			string : 'backslash'
		},
		CloseBracket : 
		{
			value : 221,
			string : 'closebracket'
		},
		SingleQuote : 
		{
			value : 222,
			string : 'singlequote'
		}
	});
	
	return keys;
}
var Keys = DefineKeys();