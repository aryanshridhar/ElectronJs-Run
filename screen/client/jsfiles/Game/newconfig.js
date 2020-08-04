var WIDTH = 400;
var HEIGHT = 400;

var config = {
    width: WIDTH,
    height: HEIGHT,
    scene: [highscore],
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