var StartMenu = function(game){
}

StartMenu.prototype = {
	create: function(){

		//Start the music, if not muted 
		if(startMusic)
		{
			musicStart.loop = true;
			if(muteMusicbool)
			{
				musicStart.mute = true;
			}
			musicStart.play();
			//Make sure there are no music to ad if the music already plays
	    	startMusic = false;
		}
	    
	    //Video in the background
	    video = this.game.add.video('titlevideo');
		video.play(true);

		var videoX = this.game.world.centerX;
		var videoY = this.game.world.centerY;
		var videoW = (this.game.width/video.width);
		var videoH = (this.game.height/video.height);

	    //  x, y, anchor x, anchor y, scale x, scale y
	    video.addToWorld(videoX, videoY, 0.5, 0.5, videoW, videoH);

		//Add the buttons
		startB = this.game.add.button(this.game.world.centerX, game.world.centerY, 'button', this.startGame, this, 2, 1, 0);
		highScoreB = this.game.add.button(this.game.world.centerX, 3.8*game.height/6, 'HS_button', this.startHighscoreMenu, this, 2, 1, 0);
		settingsB = this.game.add.button(this.game.world.centerX, 4.5*game.height/6 , 'S_button', this.startSettings, this, 2, 1, 0);

		//Add the anchor points
		startB.anchor.set(0.5, 0.5);
		highScoreB.anchor.set(0.5, 0.5);
		settingsB.anchor.set(0.5, 0.5);

		//Scale the buttons width
		startB.width=game.width*(1/2);
		highScoreB.width=game.width*(1/2.5);
		settingsB.width=game.width*(1/2.5);

		//Scale the buttns height
		startB.height=game.height*(1/7);
		highScoreB.height=game.height*(1/10);
		settingsB.height=game.height*(1/10);
	},

	//If button "Start" is pressed this function will be executed
	startGame: function() {
		//video paus and music stop
		video.play(false);
		musicStart.pause();
		startMusic = true;
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to game state
		this.game.state.start('Game');
	},

	//If button "Highscore" is pressed
	startHighscoreMenu: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to highscore menu state
		this.game.state.start('HighscoreMenu');
	},

	//If button "Settings"
	startSettings: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to settings state
		this.game.state.start('Settings');
	}	
	
}; 
