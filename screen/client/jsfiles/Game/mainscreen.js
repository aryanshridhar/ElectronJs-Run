class mainscreen extends Phaser.Scene{
    constructor(){
        super({key : "mainscreen"});
    }

    preload(){
        this.load.image('background' , './assets/image3.jpg');
        this.load.image('ship' , './assets/ship.png');
        this.load.image('rock1' , './assets/rock1.png');
        // this.load.image('ship' , './assets/rock2.png');
    }

    create(){


        this.velocity = 5;
        this.movescreen = 0.05;

        this.bg = this.add.tileSprite(0,0,WIDTH,HEIGHT,'background');
        this.ship = this.add.sprite(WIDTH/2,HEIGHT-100,'ship');
        this.rock1 = this.add.sprite(WIDTH/2,10,'rock1');

        this.bg.setOrigin(0,0);
        this.bg.setScrollFactor(0);
        this.bg.displayWidth = WIDTH;
        this.bg.displayHeight = HEIGHT;

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.rock1.setScale(0.02)

        this.ship.setScale(0.2);

    }

    update(){
        

        this.rock1.y += this.movescreen;
        this.bg.tilePositionY -= this.movescreen;

        if(this.key_W.isDown){
            this.ship.y -= this.velocity;
        }
        if(this.key_A.isDown){
            this.ship.x -= this.velocity;
        }
        if(this.key_S.isDown){
            this.ship.y += this.velocity;
        }
        if(this.key_D.isDown){
            this.ship.x += this.velocity;
        }

        this.movescreen += 0.004;
    }
}


