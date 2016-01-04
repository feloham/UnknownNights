var Client = Client || {};
Client.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
Client.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/image/preloader-bar.png');
  },
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';
 
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
 
    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('preload');
  }
};