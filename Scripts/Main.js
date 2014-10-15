/// <reference path="Game.js" />

// The entry point of the application is set to the init function
window.onload = init;
function init()
{
    new Game().run();
}

// Run specific browser methods
var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method, flags)
{
    
    var p = 0, m, t;
    while (p < pfx.length && !obj[m])
    {
        m = method;
        if (pfx[p] == "")
        {
            m = m.substr(0, 1).toLowerCase() + m.substr(1);
        }
        m = pfx[p] + m;
        t = typeof obj[m];
        if (t != "undefined")
        {
            pfx = [pfx[p]];
            if (flags != null)
                return (t == "function" ? obj[m](flags) : obj[m]);
            else
                return (t == "function" ? obj[m]() : obj[m]);
        }
        p++;
    }
}
