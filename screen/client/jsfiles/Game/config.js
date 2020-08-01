var WIDTH = 500;
var HEIGHT = 650;

var config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
    },
    scene: [mainscreen]    
};


var game = new Phaser.Game(config);