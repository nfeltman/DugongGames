// THIS IS SOMETHING RANDOM MY FRIEND MADE, NOT ME
draw = function() {
    p.background(81, 255, 255);// sets the background color
    p.fill(255, 162, 0);
    p.ellipse(370, 20, 90, 90);
    p.fill(250, 0, 0);
    p.ellipse(345, 20, 15, 15);
    p.fill(255, 0, 0);
    p.ellipse(379, 20, 15, 15);
    p.fill(135, 129, 81);
    p.line(340, 40, 1000, 100);
    p.fill(48, 138, 0);
    p.rect(0, 350, 399, 56);
    p.fill(255, 183, 0);
    p.ellipse(300, 30, 30, 5);
    p.fill(255, 183, 0);
    p.ellipse(305, 10, 30, 5);
    p.fill(255, 213, 0);
    p.ellipse(308, 50, 30, 5);
    p.fill(216, 245, 0);
    
    var randomX = Math.random(0, 400);// makes "randomX and "randomY" move randomly across the screen
    var randomY = Math.random(0, 400);
    p.ellipse(randomX, randomY, 29, 29);fill(0, 0, 0);// changes the size and/or color of the duck
    p.ellipse(randomX - 7, randomY - 4, 10, 10);// change the sze and color of the eyes
    p.ellipse(randomX + 6, randomY - 4, 10, 10);fill(255, 140, 0);
    p.rect(randomX +  0, randomY - 0, 13, 9);// changes the size and/or color of the beak
};
