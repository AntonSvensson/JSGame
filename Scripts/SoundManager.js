/// <reference path="Game.js" />
/// <reference path="Helpers/MathHelper.js" />

/**
	A class that contains all the images in the game
*/

var g_SoundManager;
function SoundManager()
{
    this.masterVolume = 0.5;
    this.musicVolume = 0.1;
    this.ambientVolume = 0.1;
    this.soundVolume = 0.1;

    this.musicChannel = null;
    this.musicChannel2 = null;
    this.musicChannelTransition = { value: false, speed: 1.0, volume: 0.0 }
    this.musicChannel2Transition = { value: false, speed: 1.0, volume: 0.0 }
    this.ambientChannel = null;
    this.ambientChannel2 = null;
    this.ambientChannelTransition = { value: false, speed: 1.0, volume: 0.0 }
    this.ambientChannel2Transition = { value: false, speed: 1.0, volume: 0.0 }
    this.soundChannel = new List();

    this.update = function(dt)
    {
        if (this.musicChannel != null)
        {
            if (this.musicChannelTransition.value)
            {
                this.musicChannelTransition.volume += this.musicChannelTransition.speed * dt;
                if (this.musicChannelTransition.volume > 1 || this.musicChannelTransition.volume < 0)
                {
                    this.musicChannelTransition.value = false;
                    if (this.musicChannelTransition.volume < 0)
                    {
                        this.musicChannel.pause();
                        this.musicChannel = null;
                    }
                }

                if (this.musicChannel != null)
                {
                    this.musicChannelTransition.volume = MathHelper.Clamp(0.0, 1.0, this.musicChannelTransition.volume);
                    var volume = this.masterVolume * this.musicVolume * this.musicChannelTransition.volume;
                    this.musicChannel.volume = volume;
                }
            }
        }

        if (this.musicChannel2 != null)
        {
            if (this.musicChannel2Transition.value)
            {
                this.musicChannel2Transition.volume += this.musicChannel2Transition.speed * dt;
                if (this.musicChannel2Transition.volume > 1 || this.musicChannel2Transition.volume < 0)
                {
                    this.musicChannel2Transition.value = false;
                    if (this.musicChannel2Transition.volume < 0)
                    {
                        this.musicChannel2.pause();
                        this.musicChannel2 = null;
                    }
                }

                if (this.musicChannel2 != null)
                {
                    this.musicChannel2Transition.volume = MathHelper.Clamp(0.0, 1.0, this.musicChannel2Transition.volume);
                    var volume = this.masterVolume * this.musicVolume * this.musicChannel2Transition.volume;
                    this.musicChannel2.volume = volume;
                }
            }
        }
    }

    this.playSong = function(audio, loop, transition)
    {
        if (audio == null)
            throw "playSong:audio == null";

        if (transition)
        {
            if (this.musicChannel == null)
            {
                this.setMusicChannel(audio, loop, transition);
            }
            else if (this.musicChannel2 == null)
            {
                this.setMusicChannel2(audio, loop, transition);
            }
            else
            {
                if (this.musicChannel != null && this.musicChannel2 != null)
                {
                    if (this.musicChannelTransition.value && this.musicChannelTransition.speed > 0)
                    {
                        this.musicChannel.pause();
                        this.setMusicChannel(audio, loop, transition);
                    }
                    else (this.musicChannel2Transition.value && this.musicChannel2Transition.speed > 0)
                    {
                        this.musicChannel2.pause();
                        this.setMusicChannel2(audio, loop, transition);
                    }
                }
            }
        }
        else
        {
            if (this.musicChannel != null)
            {
                this.musicChannel.pause();
                this.musicChannel == null
            }
            if (this.musicChannel2 != null)
            {
                this.musicChannel2.pause();
                this.musicChannel2 = null;
            }

            this.musicChannel = new Audio();
            this.musicChannelTransition = { value: true, speed: 0.5, volume: 0.0 };

            var volume = this.masterVolume * this.musicVolume * this.musicChannelTransition.volume;
            this.setSong(this.musicChannel, audio, volume, loop);
        }
    }

    this.setMusicChannel = function(audio, loop, transition)
    {
        if (this.musicChannel2 != null)
            if (this.musicChannel2.id == audio.id)
                return;
        
        this.musicChannel = new Audio();

        this.musicChannelTransition.value = true;
        this.musicChannelTransition.speed = transition;
        this.musicChannelTransition.volume = 0.0;

        this.musicChannel2Transition.value = true;
        this.musicChannel2Transition.speed = -transition;

        this.setSong(this.musicChannel, audio, 0.0, loop);
    }

    this.setMusicChannel2 = function(audio, loop, transition)
    {
        if (this.musicChannel != null)
            if (this.musicChannel.id == audio.id)
                return;
        
        this.musicChannel2 = new Audio();

        this.musicChannel2Transition.value = true;
        this.musicChannel2Transition.speed = transition;
        this.musicChannel2Transition.volume = 0.0;

        this.musicChannelTransition.value = true;
        this.musicChannelTransition.speed = -transition

        this.setSong(this.musicChannel2, audio, 0.0, loop);
    }

    this.setSong = function(musicchannel, audio, volume, loop)
    {  
        musicchannel.setAttribute('id', audio.id);
        musicchannel.setAttribute('type', audio.type);
        musicchannel.setAttribute('src', audio.src);
        musicchannel.volume = volume;
        musicchannel.loop = loop;
        musicchannel.play();
    }

    this.stopSongs = function()
    {
        if (this.musicChannel != null)
        {
            this.musicChannel.pause();
            this.musicChannel = null;
        }
        if (this.musicChannel2 != null)
        {
            this.musicChannel2.pause();
            this.musicChannel2 = null;
        }

        this.musicChannelTransition = { value: false, speed: 0.5, volume: 0.0 };
        this.musicChannel2Transition = { value: false, speed: 0.5, volume: 0.0 };
    }

    this.playAmbient = function(audio, loop, transition)
    {
        if (audio == null)
            throw "playAmbient:audio == null";
        
        if (transition)
        {
            if (audio.id == this.ambientChannel.id)
                return;

            this.ambientChannel = new Audio();
            this.ambientChannel.setAttribute('id', audio.id);
            this.ambientChannel.setAttribute('type', audio.type);
            this.ambientChannel.setAttribute('src', audio.src);
            this.ambientChannel.volume = this.masterVolume * this.ambientVolume;
            this.ambientChannel.loop = loop;
            this.ambientChannel.play();
        }
    }

    this.stopAmbients = function()
    {
        if (this.ambientChannel != null)
        {
            this.ambientChannel.pause();
            this.ambientChannel = null;
        }
        if (this.ambientChannel2 != null)
        {
            this.ambientChannel2.pause();
            this.ambientChannel2 = null;
        }
    }

    this.playSound = function(audio)
    {
        if (audio == null)
            throw "playSound:audio == null";

        sound = new Audio();
        this.soundChannel.add(sound);

        sound.setAttribute('id', audio.id);
        sound.setAttribute('type', audio.type);
        sound.setAttribute('src', audio.src);
        sound.addEventListener('ended', this.soundEnded, false);
        sound.volume = this.masterVolume * this.soundVolume;
        sound.loop = false;
        sound.play();
    }

    this.soundEnded = function()
    {
        if (g_SoundManager.soundChannel.contains(this))
            g_SoundManager.soundChannel.remove(this);
    }
}
SoundManager.prototype = new UpdateObject();
