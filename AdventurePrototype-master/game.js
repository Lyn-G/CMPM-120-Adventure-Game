class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Entrance");
    }
    preload() {
        this.load.image('Candyland', 'Candyland.png');
    }

    onEnter() {
        this.add.image(664,400,"Candyland");
        this.cameras.main.setBackgroundColor('#CD919E');

        let clip = this.add.text(this.w * 0.15, this.w * 0.3, "There's a\nhole here...")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("You can't see the hole,\nbut trust me, it's there."))
            .on('pointerdown', () => {
                this.showMessage("Going into the abyss!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                this.gotoScene('demo2');
            });

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        let door = this.add.text(this.w * 0.25, this.w * 0.21, "Just walking\non the path...")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => {
                // if (this.hasItem("key")) {
                //     this.showMessage("You've got the key for this door.");
                // } else {
                //     this.showMessage("It's locked. Can you find a key?");
                // }

                this.showMessage("There's a path for a reason! ")
            })
            .on('pointerdown', () => {
                // this.loseItem("key");
                // this.showMessage("*squeak*");
                // door.setText("🚪 unlocked door");
                this.showMessage("What will we see???");
                this.tweens.add({
                    targets: door,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
            
            })

        let explain = this.add.text(this.w *0.02, this.w * 0.49, "We've been teleported to a Candyland! How shall you proceed?")
        .setFontSize(this.s *2.4)
        .setFontFamily("Tahoma")
    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "We met some gummy worms!");
    }

    preload() {
        this.load.image('first', 'first gummy worm.png');
        this.load.image('second', "Helena's gummy worm.png");
        this.load.image('third', 'green+pink.png');
    }
    onEnter() {
        // this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("You've got no other choice, really.");
        //     })
        //     .on('pointerdown', () => {
        //         this.gotoScene('demo1');
        //     });

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
        this.cameras.main.setBackgroundColor('#8B5742');
        this.add.image(600,300, 'first');
        this.add.image(400,800, 'second');
        this.add.image(1200,700, 'third');

        let clip = this.add.text(this.w * 0.15, this.w * 0.3, "Ride on their back!")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("You asked very politely, so they'll let you on!"))
            .on('pointerdown', () => {
                this.showMessage("Yippee!!!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                // this.gotoScene('demo2');
            });


            let clip2 = this.add.text(this.w * 0.5, this.w * 0.2, "Pet the gummy worms!")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("I wonder what they feel like?"))
            .on('pointerdown', () => {
                this.showMessage("They gave you a dirt pie cup! Mmm, yummy!");
                this.gainItem('dirt pie cup');
                this.tweens.add({
                    targets: clip2,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                // this.gotoScene('demo2');
            });
    }
}

class Dirt extends AdventureScene {
    constructor() {
        super("dirt", "We met some gummy worms!");
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(750, 540, "Kandy Kruz")
            .setFontSize(50)
            .setFontFamily("Tahoma");

        this.add.text(765,600, "Click anywhere to begin.")
            .setFontSize(20)
            .setFontFamily("Tahoma");

        this.add.text(450, 800, "Use your mouse to click on the different objects to progress through!!!")
            .setFontSize(29)
            .setFontFamily("Tahoma");
            
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

// maybe make the background a gradient?
class Dining_Hall extends Phaser.Scene{
    constructor() {
        super("Dining_Hall", "Dining Hall");
    }

    create(){
        this.cameras.main.setBackgroundColor(0xff00cc);
    
        this.add.text(140, 200, "Dining Hall")
            .setFontSize(120)
            .setFontFamily("Tahoma");

        let y = 500;

        let text = "You hunger for food at the dining hall.\nThere's cookies for dessert.\nYou clumsily drop one when trying to grab it.\nBlowing it off, you still eat it.";
        let lines = text.split("\n");

        for (let i = 0; i < lines.length; i++){
            let line = this.add.text(200, y, lines[i], {font: "60px Tahoma", fill: "#ffffff"})
            line.alpha = 0;

            this.tweens.add({
                targets: line,
                alpha: 1,
                duration: 1000,
                ease: "Linear",
                delay: i * 2000,
            });

            y += 100;
        }
        let delay = lines.length * 2000 + 5000;

        this.tweens.add({
            targets: this.cameras.main,
            alpha: 0,
            duration: 1000,
            ease: "Linear",
            delay: delay, 
            onComplete: function () {
                // Switch to the next scene after the fade-out is complete
                this.scene.start("demo1");
            },
            callbackScope: this // Ensure that the callback function is called in the scope of the current scene object
        });
    
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Demo2],
    title: "Adventure Game",
});

