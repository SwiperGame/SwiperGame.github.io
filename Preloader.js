var Preloader = function(game){     
};

Preloader.prototype = {
	  preload: function () {   //Preload all the images and data that are going to be used in the game
        //This is the loading screen 
        //Add the image and the animation
        var backGround = this.game.add.image(this.world.centerX, this.world.centerY, 'titleimage');
        backGround.anchor.set(0.5, 0.5);
        backGround.width = game.width;
        backGround.height = game.height;

        var foocy = this.game.add.sprite(this.world.centerX, this.world.centerY, 'preloaderbar');
        foocy.anchor.set(0.5, 0.5);
        var walk = foocy.animations.add('walk');
        foocy.animations.play('walk', 16, true);

        //Scale the image
        foocy.width = this.world.width*(1/3);
        foocy.height=this.world.height*(1/4);

        //Menu images
        this.load.image('highscore_bild', 'assets/images/HIGHSCORE_bakgrund5.png');
        this.load.image('gameoverMenu', 'assets/images/GAMEOVER_2.png');
        this.load.image('settings_bild', 'assets/images/SETTINGS_SCREEN.png');
        this.load.image('transpause_bild', 'assets/images/GAME_PAUSED.png');
        this.load.image('blank_canvas', 'assets/images/BLANK_CANVAS.png');

        //Menu video
        this.load.video('titlevideo', 'assets/images/Comp 2_ver3.mp4');
        
        //Fonts
        this.load.bitmapFont('anuswiper_font', 'assets/fonts/bitmap/superswiper.png', 'assets/fonts/bitmap/superswiper.fnt');
  
         //feedbackfonts
        this.load.bitmapFont('anuswiper_font_rod', 'assets/fonts/bitmap/superswiper_rod.png', 'assets/fonts/bitmap/superswiper_feedback.fnt');
        this.load.bitmapFont('anuswiper_font_green', 'assets/fonts/bitmap/superswiper_green.png', 'assets/fonts/bitmap/superswiper_feedback.fnt');
        this.load.bitmapFont('anuswiper_font_rosa', 'assets/fonts/bitmap/superswiper_rosa.png', 'assets/fonts/bitmap/superswiper_feedback.fnt');
        
        //Background in game
        this.load.image('sky', 'assets/images/GAME BACKGROUND TEST3.png');
        //Feedback in game
        this.load.image('lostlife', 'assets/images/WARNING RED.png');

        //Arrows
        this.load.image('right_pil', 'assets/images/R_PIL1.png');
        this.load.image('left_pil', 'assets/images/L_PIL1.png');
        
        //Music and sounds
        this.load.audio('seal', 'assets/audio/sealfiremixtape.mp3');
        this.load.audio('jerry5min', 'assets/audio/jerry4min.mp3');
        this.load.audio('explosion_audio', 'assets/audio/explosion.mp3');
        this.load.audio('select_audio', 'assets/audio/select.mp3');
        this.load.audio('fem', 'assets/audio/FEM.mp3');
        this.load.audio('tia', 'assets/audio/10och20.mp3');
        this.load.audio('swipe1', 'assets/audio/swipe1.mp3');
        this.load.audio('swipe2', 'assets/audio/swipe2.mp3');
        this.load.audio('swipe3', 'assets/audio/swipe3.mp3');
        this.load.audio('swipe4', 'assets/audio/swipe4.mp3');
        this.load.audio('swipe5', 'assets/audio/swipe5.mp3');
        this.load.audio('swipe6', 'assets/audio/swipe6.mp3');
        this.load.audio('swipe7', 'assets/audio/swipe7.mp3');
        this.load.audio('gameoverjerry', 'assets/audio/gameoverjerry.mp3');
        this.load.audio('ohman', 'assets/audio/ohman.mp3');
        this.load.audio('btnpush', 'assets/audio/ButtonPush.mp3');
        this.load.audio('great', 'assets/audio/great.mp3');
        this.load.audio('borne', 'assets/audio/JuanBorne.mp3');
        this.load.audio('awesome', 'assets/audio/awesome.mp3');
 
        //Animations, buttons and spritirsheets
        this.load.spritesheet('button', 'assets/images/spritesheets/THE_START_KNAPP.png');
        this.load.spritesheet('HS_button', 'assets/images/spritesheets/THE_HIGH_KNAPP.png');
        this.load.spritesheet('back', 'assets/images/spritesheets/BACK.png');
        this.load.spritesheet('S_button', 'assets/images/spritesheets/THE_SETT_KNAPP.png');
        this.load.spritesheet('muteMusic', 'assets/images/spritesheets/MUTE_MUSIC.png');
        this.load.spritesheet('unMuteMusic', 'assets/images/spritesheets/UNMUTE_MUSIC.png');
        this.load.spritesheet('muteSound', 'assets/images/spritesheets/MUTE_SOUND.png');
        this.load.spritesheet('unMuteSound', 'assets/images/spritesheets/UNMUTE_SOUND.png');
        this.load.spritesheet('credits', 'assets/images/spritesheets/CREDITS.png');
        this.load.spritesheet('tryAgain', 'assets/images/spritesheets/TRY_AGAIN.png');
        this.load.spritesheet('backToMenu', 'assets/images/spritesheets/MAIN_MENU_2.png');
        this.load.spritesheet('resume', 'assets/images/spritesheets/RESUME.png');
        this.load.image('miniPause', 'assets/images/pausikon.png');
        this.load.image('miniPlay', 'assets/images/playikon.png');
        
},

	create: function () {
        //Go to the start menu state
        musicStart = this.game.add.audio('seal'); 
        audio = this.game.add.audio('btnpush');        
        this.game.state.start('StartMenu');
    },

};