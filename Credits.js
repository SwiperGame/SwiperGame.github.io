var Credits = function(game){
}

Credits.prototype = {
	create: function(){
		Credits.width=game.width;
        Credits.height=game.height;
        
        var Background = this.game.add.image(game.world.centerX,game.world.centerY,'blank_canvas');
        Background.anchor.set(0.5, 0.5);
        Background.width=game.width;
        Background.height=game.height;

        back = this.game.add.button(this.game.world.centerX, game.height*(8/10), 'back', this.backSettings, this, 2, 1, 0);
		back.anchor.set(0.5, 0.5);
		back.height = game.height*(1/10);
        back.width = game.width*(1/3);

        //Add the credit text
        credit = this.add.bitmapText(game.world.centerX, game.height *(4/10),'anuswiper_font','Elias Elmquist\n\nErik Asp\n\nJakob\nGunnarsson\n\nJulius Kordel\n\nMalin Ejdbo\n\nNicholas\nFrederiksen\n' );
        
        //Add the anchor
        credit.anchor.set(0.5, 0.5);

        //Align the text
        credit.align = "center";

        //Scale the text 
        credit.fontSize = game.height * (1/18);

	},

	backSettings: function() {
		//Knappljud
		if (muteSoundbool == false)
		{
			audio.play(); 
		}
		//Go to settings state
		this.game.state.start('Settings');
	}	


}