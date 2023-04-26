class LynelleGame extends Phaser.Scene {
    constructor() {
        super('lynelleGame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('sectionimage', 'sectionimage.png');
    }
    create(){
        this.graphics = this.add.graphics();
        // add shapes
        this.graphics.fillStyle(0x0, 1); //color, opacity
        this.graphics.fillCircle(160,160,50);   //x, y, radius
        this.graphics.fillTriangle(250, 50, 200, 150, 400, 150); //x1, y1, x2, y2, x3, y3
        this.graphics.fillEllipse(450, 100, 200, 100, 30);   // x, y, width, height, smoothness
        this.graphics.fillEllipse(300, 300, 200, 100, 16);   // x, y, width, height, smoothness
    
        //add lines
        this.graphics.lineStyle(5, 0x759B84, 1);    //linewidth, color, opacity
        this.graphics.lineBetween(100,100,250,100); //x1, y1, x2, y2
        this.graphics.lineStyle(5, 0x3E6B4F, 0.5);
        this.graphics.lineBetween(250,100,450,100); 

        // add gradiant shapes
        // topleftcolor, toprightcolor, bottomleftcolor, bottomrightcolor, topleftopacity, toprightopacity, bottomleftopacity, bottomrightopacity 
        this.graphics.fillGradientStyle(0x66CDAA, 0x668E86, 0x32CD32,0xC5E3BF, 1, 1, 0.1, 0.1); 
        this.graphics.fillRect(600,50,150,100); //x1,y1, width, height

        //create text object
        this.textObject = this.add.text(
            50, //x
            200,//y
            "i am live!", //text
            {
                font: "40px Arial",
                color: "#F0FFF0",
            } //style
        );

        //create image object 
        this.imageObject = this.add.image(
            0,//x
            600,//y
            'sectionimage',//imagename
        )
        this.imageObject.setScale(0.8) //resize

        // Add tweens
        this.tweens.add({
            targets: this.textObject,
            x:800,
            y:0,
            alpha:0,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });

        this.tweens.add({
            targets: this.imageObject,
            x:0,
            y:0,
            alpha:0,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });
    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x7B68EE,
    scene: [LynelleGame],
}

let game = new Phaser.Game(config);
