class initscreen extends Phaser.Scene{
    constructor(){
        super({key : "initscreen"});
    }

    preload(){
        this.load.image('startbg' ,'./assets/initbg.jpg');
        this.load.image('start' ,'./assets/start.png');
    }

    create(){
        let bg = this.add.image(0,0,'startbg');
        this.start = this.add.sprite (WIDTH/2,-100,'start').setInteractive();
        this.text = this.add.text(-200,100, 'Run !').setColor('White').setFontSize(64).setFontStyle('bold italic').setFontFamily('Open Sans');

        let spritetween = this.tweens.add({
            targets : this.start,
            x : WIDTH/2,
            y : HEIGHT/2-30,
            duration : 2000,
            ease : "Bounce",
            delay : 1500
        } , this);


        let texttween = this.tweens.add({
            targets : this.text,
            x : WIDTH/2-80,
            y : 100,
            duration : 2000,
            ease : "Elastic",
            delay : 700
        } , this);

        bg.setOrigin(0,0);
        bg.displayWidth = WIDTH;
        bg.displayHeight = HEIGHT;

        this.start.setScale(0.6);
        this.start.on('pointerdown',  (pointer) => {
           this.scene.start('mainscreen')
        });
    }
}