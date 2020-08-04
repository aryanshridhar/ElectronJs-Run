const Store = require('electron-store');
const store = new Store();


class highscore extends Phaser.Scene{
    constructor(){
        super({key : "highscore"});
    }
    
    preload(){
        this.load.image('endbg' ,'./assets/background.jpg');
    }

    init(){
        this.pointarray = store.get('allscore');
        this.pointarray.sort();
        this.pointarray.reverse();
    }

    create(){

        this.y = 110

        let bg = this.add.image(0,0,'endbg');

        this.highscore_text = this.add.text(WIDTH/2-100,-100, 'Top scores : ').setColor('White').setFontSize(42).setFontFamily('Impact');
        let tween = this.tweens.add({
            targets : this.highscore_text,
            x : WIDTH/2-100,
            y : 20,
            duration : 2000,
            ease : "Elastic",
            delay : 600
        } , this);

        if(this.pointarray.length === 0){
            this.errortext = this.add.text(-300,100, 'Nothing to Show !').setColor('White').setFontSize(30).setFontFamily('Impact');
            let newtween = this.tweens.add({
                targets : this.errortext,
                x : WIDTH/2-110,
                y : 100,
                duration : 2000,
                ease : "Elastic",
                delay : 600
            } , this);
    
        }
        else{
            if(this.pointarray.length > 5){
                this.pointarray = this.pointarray.slice(0,5);
            }
            for(let i=0;i<this.pointarray.length;i++){
                console.log(this.pointarray);
                this.text = this.add.text(-100,this.y, "- " + this.pointarray[i]).setColor('White').setFontSize(40).setFontFamily('Impact');
                this.createtween(this.text,60,this.y);
                this.y += 50;
            }
        }


        bg.setOrigin(0,0);
        bg.displayWidth = WIDTH;
        bg.displayHeight = HEIGHT;
    
    }

    createtween = (object,x,y) => {
        let texttween = this.tweens.add({
            targets : object,
            x : x,
            y : y,
            duration : 2000,
            ease : "Elastic",
            delay : 600
        } , this);
    }

}