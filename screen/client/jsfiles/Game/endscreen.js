const Store = require('electron-store');
const store = new Store();


class endscreen extends Phaser.Scene{
    constructor(){
        super({key : "endscreen"});
    }

    init(obj){
        this.points = Math.round(obj.score);
        store.set('score' , this.points);
        console.log(store.get('allscore'));
    }

    
    preload(){
        this.load.image('endbg' ,'./assets/initbg.jpg');
        this.load.image('restart' ,'./assets/restart.png');
    }

    create(){

        let bg = this.add.image(0,0,'endbg');
        this.reset = this.add.sprite(WIDTH/2,-100,'restart').setInteractive();
        this.text = this.add.text(-200,100, 'Score: ' + this.points).setColor('White').setFontStyle('bold italic').setFontSize(55).setFontFamily('Open Sans');
        
        let spritetween = this.tweens.add({
            targets : this.reset,
            x : WIDTH/2-10,
            y : HEIGHT/2,
            duration : 2000,
            ease : "Bounce",
            delay : 1500
        } , this);
        
        
        let texttween = this.tweens.add({
            targets : this.text,
            x : WIDTH/2-80,
            y : 100,
            duration : 1300,
            ease : "Elastic",
            delay : 600
        } , this);
        
        bg.setOrigin(0,0);
        bg.displayWidth = WIDTH;
        bg.displayHeight = HEIGHT;
        
        this.reset.setScale(0.3)
        this.reset.on('pointerdown',  (pointer) => {
            this.scene.start('mainscreen');
        });
        
    }
}