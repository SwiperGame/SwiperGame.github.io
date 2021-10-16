var Settings = function(game){
}

Settings.prototype = {
    create: function(){
        //Add the background image
        var Settings = this.game.add.image(game.world.centerX,game.world.centerY,'settings_bild');
        Settings.anchor.set(0.5, 0.5);
        Settings.width=game.width;
        Settings.height=game.height;
    
    	//Add the "Back" button
        back = this.game.add.button(this.game.world.centerX, 8*game.height/10, 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
        back.height = game.height*(1/10);
        back.width = game.width*(1/3);

        //Add the credits button
        credits = this.game.add.button(this.game.world.centerX, game.height *(6/10), 'credits', this.startCredits, this, 2, 1, 0);
        credits.anchor.set(0.5, 0.5);
        credits.height = game.height*(1/10);
        credits.width = game.width *(1/3);
        
        //Add the mute/unmute buttons
        if(muteMusicbool == false)
        {
        	muteMusic = this.game.add.button(this.game.world.centerX, game.height *(4/10), 'muteMusic', this.muteMusic, this, 2, 1, 0);
            muteMusic.anchor.set(0.5, 0.5);
            muteMusic.height=game.height*(1/10);
            muteMusic.width=game.width*(1/2.5);
        }

        else if(muteMusicbool)
        {
        	unMuteMusic = this.game.add.button(this.game.world.centerX, game.height * (4/10), 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
            unMuteMusic.anchor.set(0.5, 0.5);
            unMuteMusic.height=game.height*(1/10);
            unMuteMusic.width=game.width*(1/2.5);

        }

        if(muteSoundbool == false)
        {
        	muteSound = this.game.add.button(this.game.world.centerX, game.world.centerY, 'muteSound', this.muteSound, this, 2, 1, 0);
            muteSound.anchor.set(0.5, 0.5);
            muteSound.height=game.height*(1/10);
            muteSound.width=game.width*(1/2.5);

        }

        else if(muteSoundbool)
        {
			unMuteSound = this.game.add.button(this.game.world.centerX, game.world.centerY, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
            unMuteSound.anchor.set(0.5, 0.5);
            unMuteSound.height=game.height*(1/10);
            unMuteSound.width=game.width*(1/2.5);
        }
        
       
    },
    //If "Back" button is pressed
    backMenu: function(){
        //Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
        //Go to start menu state
        this.game.state.start('StartMenu');
    },

    muteMusic: function(){
    	//Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
        musicStart.mute = true;
    	muteMusic.pendingDestroy = true;
    	unMuteMusic = this.game.add.button(this.game.world.centerX, game.height * (4/10), 'unMuteMusic', this.unMuteMusic, this, 2, 1, 0);
        unMuteMusic.anchor.set(0.5, 0.5);
        unMuteMusic.height=game.height*(1/10);
        unMuteMusic.width=game.width*(1/2.5);
    	muteMusicbool = true;
    },

    unMuteMusic: function(){
    	//Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
        musicStart.mute = false;
    	muteMusic = this.game.add.button(this.game.world.centerX, game.height * (4/10), 'muteMusic', this.muteMusic, this, 2, 1, 0);
    	unMuteMusic.pendingDestroy = true;
        muteMusic.anchor.set(0.5, 0.5);
        muteMusic.height=game.height*(1/10);
        muteMusic.width=game.width*(1/2.5);
    	muteMusicbool = false;
    },

    muteSound: function(){
    	muteSoundbool = true;
    	muteSound.pendingDestroy = true;
    	unMuteSound = this.game.add.button(this.game.world.centerX, game.world.centerY, 'unMuteSound', this.unMuteSound, this, 2, 1, 0);
        unMuteSound.anchor.set(0.5, 0.5);
        unMuteSound.height=game.height*(1/10);
        unMuteSound.width=game.width*(1/2.5);
    },

    unMuteSound: function(){
        muteSoundbool = false;
        //Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
    	unMuteSound.pendingDestroy = true;
    	muteSound = this.game.add.button(this.game.world.centerX, game.world.centerY, 'muteSound', this.muteSound, this, 2, 1, 0);
        muteSound.anchor.set(0.5, 0.5);
        muteSound.height=game.height*(1/10);
        muteSound.width=game.width*(1/2.5);
    },

    startCredits: function(){
        //Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
    	this.game.state.start('Credits');
    }

};