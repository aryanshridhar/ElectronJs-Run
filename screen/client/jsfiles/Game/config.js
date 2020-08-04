var WIDTH = 500;
var HEIGHT = 650;

var config = {
    width: WIDTH,
    height: HEIGHT,
    scene: [initscreen,mainscreen,endscreen],
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          // debug: true,
          debugShowVelocity: false
      }
    }
  }
  


var game = new Phaser.Game(config);