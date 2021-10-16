var HighscoreMenu = function(game){
}

HighscoreMenu.prototype = {
    create: function(){

    	//Add the highscore menu image
        var Highscoremenu = this.game.add.image(game.world.centerX,game.world.centerY,'highscore_bild');
        Highscoremenu.anchor.set(0.5, 0.5);
        Highscoremenu.width=game.width;
        Highscoremenu.height=game.height;
        
        //If there are no highscore then set it to zero
        if(localStorage.getItem('highscore') == null)
        {
            localStorage.setItem('highscore', 0);
            localStorage.setItem('highscore2', 0);
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore2') == null)
        {
            localStorage.setItem('highscore2', 0);
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore3') == null)
        {
            localStorage.setItem('highscore3', 0);
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);

        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore4') == null)
        {
            localStorage.setItem('highscore4', 0);
            localStorage.setItem('highscore5', 0);
        }
        //If there are no highscore then set it to zero
        else if(localStorage.getItem('highscore5') == null)
        {
            localStorage.setItem('highscore5', 0);
        } 

        //score
        highscore1_1 = this.add.bitmapText((game.width * (3/10)), (game.height * (3/10)),'anuswiper_font', "1.", 24);
        highscore2_1 = this.add.bitmapText((game.width * (3/10)), (game.height * (4/10)),'anuswiper_font', "2.", 24);
        highscore3_1 = this.add.bitmapText((game.width * (3/10)), (game.height * (5/10)),'anuswiper_font', "3.", 24);
        highscore4_1 = this.add.bitmapText((game.width * (3/10)), (game.height * (6/10)),'anuswiper_font', "4.", 24);
        highscore5_1 = this.add.bitmapText((game.width * (3/10)), (game.height * (7/10)),'anuswiper_font', "5.", 24);

        highscore1_2 = this.add.bitmapText((game.width * (6/10)), (game.height * (3/10)), 'anuswiper_font', localStorage.getItem('highscore'), 24);
        highscore2_2 = this.add.bitmapText((game.width * (6/10)), (game.height * (4/10)), 'anuswiper_font', localStorage.getItem('highscore2'), 24);
        highscore3_2 = this.add.bitmapText((game.width * (6/10)), (game.height * (5/10)), 'anuswiper_font', localStorage.getItem('highscore3'), 24);
        highscore4_2 = this.add.bitmapText((game.width * (6/10)), (game.height * (6/10)), 'anuswiper_font', localStorage.getItem('highscore4'), 24);
        highscore5_2 = this.add.bitmapText((game.width * (6/10)), (game.height * (7/10)), 'anuswiper_font', localStorage.getItem('highscore5'), 24);

        //Set anchor points
        highscore1_1.anchor.set(0, 0.5);
        highscore2_1.anchor.set(0, 0.5);
        highscore3_1.anchor.set(0, 0.5);
        highscore4_1.anchor.set(0, 0.5);
        highscore5_1.anchor.set(0, 0.5);

        highscore1_2.anchor.set(0, 0.5);
        highscore2_2.anchor.set(0, 0.5);
        highscore3_2.anchor.set(0, 0.5);
        highscore4_2.anchor.set(0, 0.5);
        highscore5_2.anchor.set(0, 0.5);


        //Responsive higescores
        highscore1_1.fontSize=game.height*(1/11);
        highscore2_1.fontSize=game.height*(1/11);
        highscore3_1.fontSize=game.height*(1/11);
        highscore4_1.fontSize=game.height*(1/11);
        highscore5_1.fontSize=game.height*(1/11);

        highscore1_2.fontSize=game.height*(1/11);
        highscore2_2.fontSize=game.height*(1/11);
        highscore3_2.fontSize=game.height*(1/11);
        highscore4_2.fontSize=game.height*(1/11);
        highscore5_2.fontSize=game.height*(1/11);

        //Add the buttons
        back = this.game.add.button(this.game.world.centerX, game.height*(8.5/10), 'back', this.backMenu, this, 2, 1, 0);
        back.anchor.set(0.5, 0.5);
        back.height = game.height*(1/10);
        back.width = game.width*(1/3);
        //Add the anchor points
        back.anchor.set(0.5, 0.5);

    },
    //If the "Back" button is pressed
    backMenu: function(){
        //Knappljud
        if (muteSoundbool == false)
        {
            audio.play(); 
        }
        //Go to start menu state
        this.game.state.start('StartMenu');    }
};
