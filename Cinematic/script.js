class Cinematic extends Phaser.Scene {
    constructor() {
        super('cinematic-lynelle');
    }

    preload(){
        this.load.image('logo', 'logo.png');
    }

    create() {

        //create image object 
        this.imageObject = this.add.image(
            400,//x
            300,//y
            'logo',//imagename
        )
        this.imageObject.setScale(0.7); //resize

        this.graphics = this.add.graphics();
        // add shapes
        this.graphics.fillGradientStyle(0x099773, 0x39B18D, 0x1CA17D,0x26A783, 0.8, 1, 0.3, 0.1); 

        this.graphics.fillTriangle(400, 125, 225, 125, 225, 290); //x1, y1, x2, y2, x3, y3
        this.graphics.fillTriangle(575, 325, 575, 475, 425, 475); //x1, y1, x2, y2, x3, y3

    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x6a8455,
    scene: [Cinematic],
}

let game = new Phaser.Game(config);