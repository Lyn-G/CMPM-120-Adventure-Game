A simple adventure game by Lynelle Goh based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: <br>
1. Dirt scene
2. Encounter scene
3. Road scene
4. Road2 scene <br>
- **2+ scenes *not* based on `AdventureScene`**: <br>
1. Dining_Hall scene
2. Ending scene
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: slideOut(targets, delay, duration)<br>
    This function adds a tween to the targets. The targets slide across the scene.
    - Enhancement 2: rotate(tagrets)<br>
    This function adds a tween to the targets. The targets rotate on the screen.

Experience requirements:
- **4+ locations in the game world**: <br>
1. Dirt
2. Road
3. Peppermint Patties Tower
4. Dining Hall
- **2+ interactive objects in most scenes**: <br>
1. At the entranceway, players can select either two options for whichever path they want to take.
2. In the dirt, players have the option of petting the gummy worms or riding on their backs.
- **Many objects have `pointerover` messages**: 
1. At the entranceway, players can hover over the options and see small messages about each choice.
2. When encountering the peppermint patties tower, messages appear in both options and may influence players in their choices.
- **Many objects have `pointerdown` effects**: <br>
1. At the entranceway, players can click on the different options to be taken elsewhere.
2. Almost all options will shake when clicked on.
- **Some objects are themselves animated**:<br>
1. Ice cream kitty will slide across the screen.
2. Gummy worms will rotate when the pointer is over them.

Asset sources:<br>
For all images I got online, I edited them using this [free website on the web](https://www.befunky.com/create/).<br>
For all art that I did myself, I drew them using this [free website on the web](https://sketchpad.app/en/).<br>
1. Candy Road.png - I got it [online](https://www.pxfuel.com/en/desktop-wallpaper-nphdo) and edited it by blurring and adding brightness.
2. Candyland.png - I got it [online](https://wallpapersafari.com/candyland-background/) and edited it by blurring and adding brightness.
3. Chocolate.png - I drew it myself using the crayon option.
4. cotton candy.png - I drew it myself using the crayon option.
5. first gummy worm.png - I drew it myself using the crayon option.
6. green+pink.png - I drew it myself using the crayon option.
7. Helena's gummy worm.png - I drew it myself using the crayon option.
8. Ice cream Cat.png - I got it [online](https://tmnt2012series.fandom.com/wiki/Ice_Cream_Kitty) and edited it by blurring and adding brightness. I understand that this character is from a TV show, and I was inspired by that character to add it to my Candyland game.
9. Jelly Bean Bowl.png - I got it [online](http://www.clker.com/clipart-jelly-bean-bowl.html) and edited it by blurring and adding brightness.
10. peppermint.png - I drew it myself using the crayon option.
11. patty.png - I got it [online](https://www.stickpng.com/img/food/peppermint/peppermint-patties) and edited it by blurring.

Code sources:
- `adventure.js` and `index.html` were created for this project by [Adam Smith](https://github.com/rndmcnlly) and edited by Lynelle Goh.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by Lynelle Goh.
