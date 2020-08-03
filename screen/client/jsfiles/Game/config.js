var WIDTH = 500;
var HEIGHT = 650;

var config = {
    width: WIDTH,
    height: HEIGHT,
    scene: [initscreen,mainscreen],
    pixelArt: true,
    physics: {
      debug: true,
      default: "arcade",
      arcade:{
          debug: false,
          debugShowVelocity: false
      }
    }
  }
  


var game = new Phaser.Game(config);