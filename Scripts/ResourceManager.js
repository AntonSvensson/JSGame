/// <reference path="Game.js" />

/**
	A class that contains all the images in the game
*/

var g_ResourceManager;
var ResourceTypes = 
{
    image : 'image',
    sound : 'sound',
    song : 'song'
};

function ResourceManager()
{
	//Array with the images
    this.images = [];
    //Array with the music
    this.songs = [];
    //Array with the sounds
    this.sounds = [];
    

    this.filesToLoad = 0;
    this.filesLoaded = 0;

    this.init = function(/**Array*/resources)
    {
        if (resources == null)
            return;
        else
            this.addResources(resources);
    }

    this.addResources = function(/**Array*/resources)
    {
        if (resources == null)
            throw "resources == null";
        else
        {
            for (var i = 0; i < resources.length; i++)
            {
                switch (resources[i].type)
                {
                    case ResourceTypes.image:
                        this.addImage(resources[i]);
                        break;
                    case ResourceTypes.song:
                        this.addSong(resources[i]);
                        break;
                    case ResourceTypes.sound:
                        this.addSound(resources[i]);
                        break;
                }

                // Debug
                //if (g_DEBUG)
                    //document.getElementById("resource").innerHTML += resources[i].type + "." + resources[i].name + "; ";
            }
        }
    }

    this.addImage = function(image)
    {
        this.filesToLoad++;
        var img = new Image();
        this.images[image.name] = img;

        // assign the onload function
        img.onload = this.onResourceLoaded;
        // assign the .src property of the Image object
        img.src = image.src;
    }

    this.addSong = function(song)
    {
        this.filesToLoad++;
        var audio = new Audio();
        this.songs[song.name] = audio;

        audio.addEventListener('canplaythrough', this.onResourceLoaded, false);
        audio.setAttribute('id', song.name);
        audio.setAttribute('type', 'audio/ogg');
        audio.setAttribute('src', song.src);
        audio.load();
    }

    this.addSound = function(sound)
    {
        this.filesToLoad++;
        var audio = new Audio();
        this.sounds[sound.name] = audio;

        audio.addEventListener('canplaythrough', this.onResourceLoaded, false);
        audio.setAttribute('id', sound.name);
        audio.setAttribute('type', 'audio/mp3');
        audio.setAttribute('src', sound.src);
        audio.load();
    }

    this.onResourceLoaded = function()
    {
        g_ResourceManager.filesLoaded++;
        if (g_ResourceManager.filesToLoad == g_ResourceManager.filesLoaded)
            g_ResourceManager.isLoaded = true;
    }
    this.isLoaded = false;
}