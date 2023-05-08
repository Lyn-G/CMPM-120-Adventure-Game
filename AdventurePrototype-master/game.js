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
                this.gotoScene('Encounter');
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
                this.gotoScene('dirt');
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
                this.gotoScene('dirt');
            });

        let explain = this.add.text(this.w *0.02, this.w * 0.01, "These guys are so cute! What shall we do?")
            .setFontSize(this.s *2.9)
            .setFontFamily("Tahoma")
    }
}

class Dirt extends AdventureScene {
    constructor() {
        super("dirt", "We met some gummy worms!");
    }

    preload() {
        this.load.image('first', 'first gummy worm.png');
        this.load.image('second', "Helena's gummy worm.png");
        this.load.image('third', 'green+pink.png');
    }

    onEnter() {
        this.cameras.main.setBackgroundColor('#8B5742');
        this.add.image(600,300, 'first');
        this.add.image(400,800, 'second');
        this.add.image(1200,700, 'third');

        let clip = this.add.text(this.w * 0.52, this.w * 0.09, "I see some light\nover here.")
            .setFontSize(this.s * 2.6)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("I think we can crawl out of here!"))
            .on('pointerdown', () => {
                this.showMessage("We're out!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                this.gotoScene('Road');
            });

        let explain = this.add.text(this.w *0.1, this.w * 0.5, "That was fun! I think i see a hole over there!")
            .setFontSize(this.s *2.9)
            .setFontFamily("Tahoma")
    }
}

class Encounter extends AdventureScene {
    constructor() {
        super("Encounter", "A peppermint patties tower?");
    }

    preload() {
        this.load.image('patty', 'patty.png');
        this.load.image('Candyland', 'Candyland.png');
    }

    onEnter(){
        this.add.image(664,400,"Candyland");
        this.cameras.main.setBackgroundColor('#CD919E');
        this.add.image(700,250, 'patty')
        .setScale(1.5);

        let clip = this.add.text(this.w * 0.05, this.w * 0.35, "Go around it")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's not very fun..."))
            .on('pointerdown', () => {
                this.showMessage("Around it we go!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                this.gotoScene('Road');
            });
        let clip2 = this.add.text(this.w * 0.3, this.w * 0.3, "Eat our way through!")
            .setFontSize(this.s * 2)
            .setFontFamily("Tahoma")
            .setInteractive()
            .on('pointerover', () => this.showMessage("Surely it's edible...right?"))
            .on('pointerdown', () => {
                this.showMessage("*chomp*");
                this.gainItem('minty cream');
                this.tweens.add({
                    targets: clip2,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100,
                    
                });
                this.gotoScene('Road');
            });
    }
}

class Road extends AdventureScene {
    constructor() {
        super("Road", "Along the Road");
    }

    preload() {
        // this.load.image('Candyland', 'Candyland.png');
        this.load.image('Candy Road', 'Candy Road.png');
        this.load.image('ice cream', 'Ice Cream Cat.png');
        this.load.image('Jelly Bean', 'Jelly Bean Bowl.png');
    }

    onEnter() {
        this.add.image(590,280,"Candy Road")
        .setScale(2);
        this.cameras.main.setBackgroundColor('#CD919E');

        this.add.image(1250, 850, 'ice cream');
        let candy = this.add.image(1000, 800, 'Jelly Bean')
        .setScale(0.5)
        .setInteractive()
            .on('pointerover', () => this.showMessage("A bowl of candy."))
            .on('pointerdown', () => {
            this.showMessage("FREE CANDY!!!");
            this.gainItem('candy');
            // this.someBoolean = true;
            this.tweens.add({
                targets: candy,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Road2');
            });

        this.add.text(this.w *0.02, this.w * 0.49, "We stumble across an ice cream kitty!\nWhy not feed it something?")
        .setFontSize(this.s *2.4)
        .setFontFamily("Tahoma");        

        if (this.hasItem('dirt pie cup')) {
            let dirt_option = this.add.rectangle(200, 750, 300, 300, 0xff0000, 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's okay to feed chocolate to this kitty :)"))
            .on('pointerdown', () => {
            this.showMessage("Feeding kitty!!!");
            this.loseItem('dirt pie cup');
            // this.someBoolean = true;
            this.tweens.add({
                targets: dirt_option,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Choco');
            });
            this.add.text(this.w *0.039, this.w * 0.35, "Give the dirt\npie cup")
            .setFontSize(this.s *2.4)
            .setFontFamily("Tahoma");
        } else if (this.hasItem('minty cream')) {
            let mint_option = this.add.rectangle(200, 750, 300, 300, 0xff0000, 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Fresh breath!"))
            .on('pointerdown', () => {
            this.showMessage("Feeding kitty!!!");
            this.loseItem('minty cream');
            // this.someBoolean = true;
            this.tweens.add({
                targets: mint_option,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Mint');
            });
            this.add.text(this.w *0.039, this.w * 0.35, "Give the\nmint cream")
            .setFontSize(this.s *2.4)
            .setFontFamily("Tahoma"); 
        }
    }
}

class Road2 extends AdventureScene {
    constructor() {
        super("Road2", "Along the Road");
    }

    preload() {
        // this.load.image('Candyland', 'Candyland.png');
        this.load.image('Candy Road', 'Candy Road.png');
        this.load.image('ice cream', 'Ice Cream Cat.png');
        // this.load.image('Jelly Bean', 'Jelly Bean Bowl.png');
    }

    onEnter() {
        this.add.image(590,280,"Candy Road")
        .setScale(2);
        this.cameras.main.setBackgroundColor('#CD919E');

        this.add.image(1250, 850, 'ice cream');
        /*
        let candy = this.add.image(1000, 800, 'Jelly Bean')
        .setScale(0.5)
        .setInteractive()
            .on('pointerover', () => this.showMessage("A bowl of candy."))
            .on('pointerdown', () => {
            this.showMessage("FREE CANDY!!!");
            this.gainItem('candy');
            // this.someBoolean = true;
            this.tweens.add({
                targets: candy,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            // this.gotoScene('Choco');
            });
        */
        this.add.text(this.w *0.02, this.w * 0.49, "We stumble across an ice cream kitty!\nWhy not feed it something?")
        .setFontSize(this.s *2.4)
        .setFontFamily("Tahoma");      
        
        let candy_option = this.add.rectangle(700, 750, 300, 300, 0xff0000, 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Sweet treat for kitty!"))
            .on('pointerdown', () => {
            this.showMessage("Feeding kitty!!!");
            this.loseItem('candy');
            // this.someBoolean = true;
            this.tweens.add({
                targets: candy_option,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Candy');
            });
            this.add.text(this.w *0.3, this.w * 0.375, "Give candy")
            .setFontSize(this.s *2.4)
            .setFontFamily("Tahoma");

        if (this.hasItem('dirt pie cup')) {
            let dirt_option = this.add.rectangle(200, 750, 300, 300, 0xff0000, 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's okay to feed chocolate to this kitty :)"))
            .on('pointerdown', () => {
            this.showMessage("Feeding kitty!!!");
            this.loseItem('dirt pie cup');
            // this.someBoolean = true;
            this.tweens.add({
                targets: dirt_option,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Choco');
            });
            this.add.text(this.w *0.039, this.w * 0.35, "Give the dirt\npie cup")
            .setFontSize(this.s *2.4)
            .setFontFamily("Tahoma");
        } else if (this.hasItem('minty cream')) {
            let mint_option = this.add.rectangle(200, 750, 300, 300, 0xff0000, 1)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Fresh breath!"))
            .on('pointerdown', () => {
            this.showMessage("Feeding kitty!!!");
            this.loseItem('minty cream');
            // this.someBoolean = true;
            this.tweens.add({
                targets: mint_option,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100,
                
                });
            this.gotoScene('Mint');
            });
            this.add.text(this.w *0.039, this.w * 0.35, "Give the\nmint cream")
            .setFontSize(this.s *2.4)
            .setFontFamily("Tahoma"); 
        }
    }
}

class Choco extends AdventureScene {
    constructor() {
        super("Choco", "The kitty now has chocolate ice cream!");
    }
    preload() {
        this.load.image('Candy Road', 'Candy Road.png');
        this.load.image('ice cream', 'Ice Cream Cat.png');
        this.load.image('choco', 'Chocolate.png');
    }

    onEnter() {
        this.add.image(590,280,"Candy Road")
        .setScale(2);
        this.cameras.main.setBackgroundColor('#CD919E');

        let kitty = this.add.image(1250, 850, 'ice cream');
        let ice = this.add.image(1250, 700, 'choco')
        .setScale(0.25);

        this.tweens.add({
            targets: [kitty, ice],
            x: -100,
            delay: 2000,
            duration: 1500,
            ease: 'Power2',
            onComplete: () => kitty.destroy(),
            onComplete: () => ice.destroy(), 
        });
        
        let wake_up = this.add.rectangle(this.w *0.35, this.w * 0.45, 550, 300, 0xff0000);
        wake_up.setAlpha(0);
        let text = this.add.text(this.w *0.225, this.w * 0.425, "WAKE UP!!!")
        .setFontSize(this.s *5)
        .setFontFamily("Tahoma")
        .setAlpha(0);

        this.tweens.add({
            targets: [wake_up, text],
            alpha: {
                from: 0,
                to: 0.8
            },
            delay: 3700,
            duration: 2000,
            onComplete: () => {
                console.log(wake_up.alpha);
                if (wake_up.alpha >= 0.8) {
                    wake_up.setInteractive()
                      .on('pointerover', () => {
                        this.showMessage("Wake up...what do you mean?");
                      })
                      .on('pointerdown', () => {
                        this.showMessage("...");
                        this.tweens.add({
                            targets: wake_up,
                            x: '+=' + this.s,
                            repeat: 2,
                            yoyo: true,
                            ease: 'Sine.inOut',
                            duration: 100,
                            
                        });
                        this.gotoScene('ending');
                    });
                    
                }
            }
        });
        
    }
}

class Mint extends AdventureScene {
    constructor() {
        super("Mint", "The kitty now has peppermint ice cream!");
    }
    preload() {
        this.load.image('Candy Road', 'Candy Road.png');
        this.load.image('ice cream', 'Ice Cream Cat.png');
        this.load.image('m', 'peppermint.png');
    }

    onEnter() {
        this.add.image(590,280,"Candy Road")
        .setScale(2);
        this.cameras.main.setBackgroundColor('#CD919E');

        let kitty = this.add.image(1250, 850, 'ice cream');
        let ice = this.add.image(1265, 680, 'm')
        .setScale(0.25);

        this.tweens.add({
            targets: [kitty, ice],
            x: -100,
            delay: 2000,
            duration: 1500,
            ease: 'Power2',
            onComplete: () => kitty.destroy(),
            onComplete: () => ice.destroy(), 
        });
        
        let wake_up = this.add.rectangle(this.w *0.35, this.w * 0.45, 550, 300, 0xff0000);
        wake_up.setAlpha(0);
        let text = this.add.text(this.w *0.225, this.w * 0.425, "WAKE UP!!!")
        .setFontSize(this.s *5)
        .setFontFamily("Tahoma")
        .setAlpha(0);

        this.tweens.add({
            targets: [wake_up, text],
            alpha: {
                from: 0,
                to: 0.8
            },
            delay: 3700,
            duration: 2000,
            onComplete: () => {
                console.log(wake_up.alpha);
                if (wake_up.alpha >= 0.8) {
                    wake_up.setInteractive()
                      .on('pointerover', () => {
                        this.showMessage("Wake up...what do you mean?");
                      })
                      .on('pointerdown', () => {
                        this.showMessage("...");
                        this.tweens.add({
                            targets: wake_up,
                            x: '+=' + this.s,
                            repeat: 2,
                            yoyo: true,
                            ease: 'Sine.inOut',
                            duration: 100,
                            
                        });
                        this.gotoScene('ending');
                    });
                    
                }
            }
        });
    
    }
}

class Candy extends AdventureScene {
    constructor() {
        super("Candy", "The kitty now has cotton candy ice cream!");
    }
    preload() {
        this.load.image('Candy Road', 'Candy Road.png');
        this.load.image('ice cream', 'Ice Cream Cat.png');
        this.load.image('cotton', 'cotton candy.png');
    }

    onEnter() {
        this.add.image(590,280,"Candy Road")
        .setScale(2);
        this.cameras.main.setBackgroundColor('#CD919E');

        let kitty = this.add.image(1250, 850, 'ice cream');
        let ice = this.add.image(1250, 700, 'cotton')
        .setScale(0.20);

        // slideOut([kitty, ice], 2000, 1500);
        this.tweens.add({
            targets: [kitty, ice],
            x: -100,
            delay: 2000,
            duration: 1500,
            ease: 'Power2',
            onComplete: () => kitty.destroy(),
            onComplete: () => ice.destroy(), 
        });
        
        let wake_up = this.add.rectangle(this.w *0.35, this.w * 0.45, 550, 300, 0xff0000);
        wake_up.setAlpha(0);
        let text = this.add.text(this.w *0.225, this.w * 0.425, "WAKE UP!!!")
        .setFontSize(this.s *5)
        .setFontFamily("Tahoma")
        .setAlpha(0);

        this.tweens.add({
            targets: [wake_up, text],
            alpha: {
                from: 0,
                to: 0.8
            },
            delay: 3700,
            duration: 2000,
            onComplete: () => {
                console.log(wake_up.alpha);
                if (wake_up.alpha >= 0.8) {
                    wake_up.setInteractive()
                      .on('pointerover', () => {
                        this.showMessage("Wake up...what do you mean?");
                      })
                      .on('pointerdown', () => {
                        this.showMessage("...");
                        this.tweens.add({
                            targets: wake_up,
                            x: '+=' + this.s,
                            repeat: 2,
                            yoyo: true,
                            ease: 'Sine.inOut',
                            duration: 100,
                            
                        });
                        this.gotoScene('ending');
                    });
                    
                }
            }
        });
     
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
            this.time.delayedCall(1000, () => this.scene.start('Dining_Hall'));
        });
    }
}

// maybe make the background a gradient?
class Dining_Hall extends Phaser.Scene{
    constructor() {
        super("Dining_Hall");
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

        // Create the "SKIP" text
        let skipText = this.add.text(1700, 100, "SKIP")
        .setFontSize(60);

        // Add a pointerdown event listener to the "SKIP" text
        skipText.setInteractive()
        .on('pointerdown', () => {
            // Transition to the next scene when the "SKIP" text is clicked on
            this.scene.start('demo1');
        });

    }
}

class Ending extends Phaser.Scene {
    constructor() {
        super('ending')
    }
    create() {
        this.cameras.main.setBackgroundColor("872657");
    
        this.add.text(140, 200, "Dining Hall")
            .setFontSize(120)
            .setFontFamily("Tahoma");    
    
        let finish = this.add.text(140, 350, "You passed out from eating the gross cookie that fell on the floor.\nStop eating food that’s touched the ground.")
            .setFontSize(54)
            .setFontFamily("Tahoma"); 

        let cookie = this.add.text(150, 800, "🍪 . . .")
            .setFontSize(200)
            .setFontFamily("Tahoma")
            .setTint("0xBEBEBE"); 

        this.tweens.add({
            targets: this.cameras.main,
            alpha: 0,
            duration: 1000,
            delay: 8000,
            onComplete: function () {
                // Switch to the next scene after the fade-out is complete
                this.scene.start("outro");
            },
            callbackScope: this // Ensure that the callback function is called in the scope of the current scene object
        });
            
        let skipText = this.add.text(1700, 100, "SKIP")
        .setFontSize(60);

        // Add a pointerdown event listener to the "SKIP" text
        skipText.setInteractive()
        .on('pointerdown', () => {
            // Transition to the next scene when the "SKIP" text is clicked on
            this.scene.start('outro');
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
    // Intro, Dining_Hall, Demo1, Demo2, Dirt, Road, Road2,Mint, Candy, Choco,Ending, Outro
    scene: [Road, Road2,Candy],
    title: "Adventure Game",
});

