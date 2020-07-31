var gamescene = new Phaser.Scene('game');

var HEIGHT = 650;
var WIDTH = 500
var TOTAL_DEBRIS = 15

var config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
    },
    scene: gamescene    
};

var game = new Phaser.Game(config);

gamescene.preload = function(){
    this.load.image('background' , './assets/background.jpg');
    this.load.image('ship' , './assets/ship.png');
    this.load.image('debris' , './assets/debris.png');
}