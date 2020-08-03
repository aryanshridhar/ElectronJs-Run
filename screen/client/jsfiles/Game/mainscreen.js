
var DEBRIS = []
var TOTAL_DEBRIS = 15


class mainscreen extends Phaser.Scene{
    constructor(){
        super({key : "mainscreen"});
    }

    preload(){
        this.load.image('background' , './assets/image3.jpg');
        this.load.image('ship' , './assets/ship.png');
        this.load.image('rock1' , './assets/rock1.png');
        this.load.image('rock2' , './assets/rock2.png');
        this.load.image('explosion' , './assets/explosion.png');

    }

    create(){

        this.i = 0;
        this.k = 0;
        this.threshold = 0

        this.physics.world.setBoundsCollision();

        this.velocity = 5;
        this.movescreen = 0.05;
        this.rockvelocity = 1;
        this.points = 0;

        this.bg = this.add.tileSprite(0,0,WIDTH,HEIGHT,'background');
        this.rock1 = this.physics.add.sprite(Phaser.Math.Between(0, WIDTH),-30,Phaser.Math.RND.pick(['rock1' , 'rock2']));
        DEBRIS.push(this.rock1);
        this.score = this.add.text(10,10, 'Points : ' + this.points).setColor('White').setFontSize(22).setFontFamily('Impact');
        this.ship = this.physics.add.sprite(WIDTH/2,HEIGHT-100,'ship');
        
        
        this.bg.setOrigin(0,0);
        this.bg.setScrollFactor(0);
        this.bg.displayWidth = WIDTH;
        this.bg.displayHeight = HEIGHT;
        
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.createrock(this.rock1)
        
        this.ship.setScale(0.2);
        this.ship.setInteractive();
        this.ship.setCollideWorldBounds = true;

        this.physics.add.collider(this.ship, DEBRIS, () => {
            
            
            this.explosion = this.add.sprite(this.ship.x,this.ship.y,'explosion');
            this.explosion.setScale(0.1);
            this.explosion.alpha = 0.3;
            this.ship.destroy();
            var tween = this.tweens.add({
                targets: this.explosion,
                alpha: '+=1',             
                ease : 'Linear',       
                duration: 1000,
                onComplete : () => {
                    this.explosion.destroy();
                    this.rock1.destroy();
                },
                repeat: 0,            
                yoyo: false
            },this);

            this.scene.start('endscreen' , {'score' : this.points})

        })

    }

    update(){


        for(let j=0;j<DEBRIS.length;j++){
            DEBRIS[j].y += this.rockvelocity;
        }

        this.bg.tilePositionY -= this.movescreen;
        this.score.setText('Points : ' + Math.round(this.points));

        if(DEBRIS[this.i].y > WIDTH/4-this.threshold){
            this.newrock = this.physics.add.sprite(Phaser.Math.Between(0, WIDTH),-30,Phaser.Math.RND.pick(['rock1' , 'rock2']));
            this.createrock(this.newrock)
            DEBRIS.push(this.newrock);
            this.i++;
        }

        if(DEBRIS[this.k].y > HEIGHT){
            
            DEBRIS[this.k].destroy();
            DEBRIS.shift();
            this.k++;
            this.i--;
        }

        if(this.key_W.isDown){
            this.ship.y -= this.velocity;
            if(this.ship.y - this.ship.displayHeight/2 < 0){
                this.ship.y = this.ship.displayHeight/2;
            }
        }
        if(this.key_A.isDown){
            this.ship.x -= this.velocity;
            if(this.ship.x - this.ship.displayWidth/2 + 20 < 0){
                this.ship.x = this.ship.displayWidth/2 -20;
            }
        }
        if(this.key_S.isDown){
            this.ship.y += this.velocity;
            if(this.ship.y+this.ship.displayHeight/2 + 10  >= HEIGHT){
                this.ship.y = HEIGHT-this.ship.displayHeight/2 - 10;
            }
        }
        if(this.key_D.isDown){
            this.ship.x += this.velocity;
            if(this.ship.x + this.ship.displayWidth/2 - 25  >= WIDTH){
                this.ship.x = WIDTH -this.ship.displayWidth/2 + 25;
            }
        }


        this.movescreen += 0.004;
        this.rockvelocity += 0.004;
        this.points += 1/60
        this.velocity += 0.0005;
        this.threshold -= 0.0005;
    }

    genrandom = (min,max) => {
        let num = Math.random() * (max - min) + min;
        return num;
    };

    createrock = (rock) => {

        if(rock.texture.key === 'rock2'){
            rock.setScale(this.genrandom(0.03,0.05));
            rock.setCollideWorldBounds = true;
            rock.setInteractive();
        }
        else{
            rock.setScale(this.genrandom(0.015,0.025));
            rock.setCollideWorldBounds = true;
            rock.setInteractive();
        }
    }

}

