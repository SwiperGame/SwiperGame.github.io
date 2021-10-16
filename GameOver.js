var GameOver = function(game){
}

var score = 0;

GameOver.prototype = {
	
	//Recive the score that have been sent from Game.js
	init: function(scoreIn) {
		score = scoreIn;
	},

	create: function(){
		//Add the game over image
		var GameOverMenu = this.game.add.image(game.world.centerX,game.world.centerY, 'gameoverMenu');
		GameOverMenu.anchor.set(0.5, 0.5);
		GameOverMenu.width=game.width;
		GameOverMenu.height=game.height;
		
		// Game over music
		if(muteMusicbool == false)
		{
			var gameoverjerry = this.game.add.audio('gameoverjerry');
			gameoverjerry.play();
		}
		
		//Add the score
		var scoreText = game.add.bitmapText(this.game.world.centerX, game.height *(4.7/10),'anuswiper_font', 'Your score:\n'+score );
		scoreText.anchor.set(0.5);
		scoreText.fontSize = game.height * (1/12);
		scoreText.align = 'center';

		//Next time the menu are opened the music should be played
		startMusic = true;

		//Add the buttons
		tryAgainB = this.game.add.button(this.game.world.centerX, game.height*(6.5/10), 'tryAgain', this.tryAgain, this, 2, 1, 0);
		menuB = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'backToMenu', this.startMenu, this, 2, 1, 0);
		
		//Add the anchorpoints
		tryAgainB.anchor.set(0.5, 0.5);
		menuB.anchor.set(0.5, 0.5);

		//Scale the buttons
		tryAgainB.height = game.height * (1/7);
		menuB.height = game.height * (1/9);
		tryAgainB.width = game.width * (1/2);
		menuB.width = game.width * (1/2.5);
	},

	//If button "Try Again" is pressed this function will be executed
	tryAgain: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to game state
		this.game.state.start('Game');
	},

	//If button "Back to Menu" is pressed this function will be executed
	startMenu: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to game state
		//Restart the music in menu if not muted
		startMusic = true;
		this.game.state.start('StartMenu');
	},

}