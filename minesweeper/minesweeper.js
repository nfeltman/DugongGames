/* Rules:
     Tiles start unrevealed. Click on a tile to reveal it.
     All tiles are either numbers or mines. If you click on a mine, you lose.
     Numbers say how many adjacent tiles are mines. being diagonal counts as adjacent.
     You can press any key to flag a tile. 
     Flagging does nothing, it just signifies that you think a tile is a mine.
     Press a key while hovering over an already flagged tile to unflag it.
     You win by revealing all non-mines and flagging all mines.
 */
 var mineNum = 25; // Change this to change the number of mines to any number between 0 and 225.
 
 var tiles = [];
 var flagged = [];
 var mineRevealed = 0;
 var gameOn = true;
 for (var i = 0; i <= 14; i++){
     var tilesList = [];
     for (var j = 0; j <= 14; j++){
         tilesList.push([" ", false]);
     }
     tiles.push(tilesList);
 }
 for (var i = 0; i <= 14; i++){
    var flaggedList = [];
   for (var j = 0; j <= 14; j++){
        flaggedList.push(false);
     }
     flagged.push(flaggedList);
 }
 for (var i = 0; i < mineNum; i++){
     var column = Math.floor(Math.random() *15);
     var row = Math.floor(Math.random() *15);
     if (tiles[column][row][0] === "M"){
         i -= 1;
    }
    tiles[column][row][0] = "M";
}
for (var i = 0; i <= 14; i++){ 
     for (var j = 0; j <= 14; j++){
         var notTop = j !== 0;
         var notBottom = j !== 14;
         var notLeft = i !== 0;
         var notRight = i !== 14;
         var notMine = tiles[i][j][0] !== "M";
         
         var tileNum = 0;
         if (notTop && notMine){
             if (tiles[i][j-1][0] === "M"){
                 tileNum ++;
             }
         } if (notBottom && notMine){
             if (tiles[i][j+1][0] === "M"){
                 tileNum ++;
             }
         } if (notLeft && notMine){
             if (tiles[i-1][j][0] === "M"){
                 tileNum ++;
             }
         } if (notRight && notMine){
             if (tiles[i+1][j][0] === "M"){
                 tileNum ++;
             }
         } if (notTop && notLeft && notMine){
             if (tiles[i-1][j-1][0] === "M"){
                 tileNum ++;
             }
         } if (notTop && notRight && notMine){
             if (tiles[i+1][j-1][0] === "M"){
                 tileNum ++;
             }
         } if (notBottom && notLeft && notMine){
             if (tiles[i-1][j+1][0] === "M"){
                 tileNum ++;
             }
         } if (notBottom && notRight && notMine){
             if (tiles[i+1][j+1][0] === "M"){
                 tileNum ++;
             }
         } if (!notMine){
             tileNum = "M";
         }
         
         tiles[i][j][0] = tileNum;
     }
 }
 
 function reveal(column, row){
     tiles[column][row][1] = true; // This line reveals a square
     if (tiles[column][row][0] === "M"){
         mineRevealed += 1;
     }
     if (tiles[column][row][0] === 0){
         var notTop = row !== 0;
         var notBottom = row !== 14;
         var notLeft = column !== 0;
         var notRight = column !== 14;
         if (notTop && notLeft && !tiles[column-1][row-1][1]){
             reveal(column-1, row-1);
         } if (notTop && !tiles[column][row-1][1]){
             reveal(column, row-1);
         } if (notTop && notRight && !tiles[column+1][row-1][1]){
             reveal(column+1, row-1);
         } if (notLeft && !tiles[column-1][row][1]){
             reveal(column-1, row);
         } if (notRight && !tiles[column+1][row][1]){
             reveal(column+1, row);
         } if (notBottom && notLeft && !tiles[column-1][row+1][1]){
             reveal(column-1, row+1);
         } if (notBottom && !tiles[column][row+1][1]){
             reveal(column, row+1);
         } if (notBottom && notRight && !tiles[column+1][row+1][1]){
             reveal(column+1, row+1);
         }
     }
 }
 
 function drawMine(p,bgColor, x, y){
     if (bgColor){
         p.fill(235, 148, 148);
     }
     p.rect(x, y, 26, 26);
     p.noStroke();
     p.fill(0, 0, 0);
     p.ellipse(x+13, y+13.5, 12, 12);
     p.rect(x+4.3, y+11.5, 17.5, 2);
     p.rect(x+11.5, y+4.4, 2, 18.5);
     p.stroke(0, 0, 0);
     p.strokeWeight(2);
     p.line(x+7, y+7, x+19.5, y+19.5);
     p.line(x+19.5, y+7, x+7, y+19.5);
     p.strokeWeight(1);
     p.noStroke();
     p.fill(255, 255, 255 );
     p.ellipse(x+11, y+11, 4, 4);
     p.stroke(0, 0, 0);
 }
 
 var mineColor = false;
 
 function draw(p) {
     var unflaggedMines = mineNum;
     var flaggedSquares = mineNum;
     var revealedSquares = 0;
     p.textSize(25);
     for (var i = 0; i <= 14; i++){
         for (var j = 0; j <= 14; j++){
             p.fill(209, 207, 207);
             p.rect(4+(i*26), 4+(j*26), 100, 100);
             if (tiles[i][j][0] === 0 && tiles[i][j][1]){
                 p.fill(240, 237, 237);
                 p.rect(4+(i*26), 4+(j*26), 100, 100);
             } if (tiles[i][j][0] === 1 && tiles[i][j][1]){
                 p.fill(79, 79, 247);
                 p.text("1", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 2 && tiles[i][j][1]){
                 p.fill(8, 107, 19);
                 p.text("2", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 3 && tiles[i][j][1]){
                 p.fill(255, 0, 0);
                 p.text("3", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 4 && tiles[i][j][1]){
                 p.fill(19, 4, 133);
                 p.text("4", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 5 && tiles[i][j][1]){
                 p.fill(138, 4, 31);
                 p.text("5", 10+(i*26), 27+(j*26));
             } if (tiles[i][j][0] === 6 && tiles[i][j][1]){
                 p.fill(14, 208, 242);
                 p.text("6", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 7 && tiles[i][j][1]){
                 p.fill(0, 0, 0);
                 p.text("7", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === 8 && tiles[i][j][1]){
                 p.fill(168, 166, 168);
                 p.text("8", 10+(i*26), 26.5+(j*26));
             } if (tiles[i][j][0] === "M" && tiles[i][j][1]){
                 drawMine(p,mineColor, 4+(i*26), 4+(j*26));
             }
             var x = 4+(i*26);
             var y = 4+(j*26);
             if (flagged[i][j] && !tiles[i][j][1]){
                 p.noStroke();
                 p.fill(0, 0, 0);
                 p.rect(x+12.9, y+5.25, 2.5, 15);
                 p.rect(x+10, y+18.75, 8.5, 2.5);
                 p.rect(x+8, y+21.25, 13, 2.5);
                 p.fill(255, 0, 0);
                 p.triangle(x+6, y+9.5, x+16, y+3.75, x+16, y+15.25);
                 p.stroke(0, 0, 0);
                 flaggedSquares -= 1;
                 if (tiles[i][j][0] === "M"){
                     unflaggedMines -= 1;
                 }
             }
             if (mineRevealed >= 1){
                 mineRevealed += 1;
                 if (mineRevealed >= 60000){
                     mineColor = true;
                     if (tiles[i][j][0] === "M"){
                         reveal(i, j);
                     }
                 } else {
                     if (Math.floor(mineRevealed / 7499) % 2 === 0 && mineRevealed >= 10000 && mineRevealed < 60000){
                         mineColor = true;
                     } else {
                         mineColor = false;
                     }
                 }
             }
             if (mineRevealed <= -1){
                 if ((Math.abs(mineRevealed)/10000) % 2 === 0){
                     reveal(i, j);
                 }
                 p.textSize(100);
                 p.fill(255, 0, 0);
                 p.text("You Win!", 4, 188);
                 p.textSize(25);
             }
             if (tiles[i][j][1] || flagged[i][j]){
                 revealedSquares += 1;
             }
         }
     }
     p.fill(0, 0, 0);
     p.rect(0, 0, 400, 4);
     p.rect(0, 0, 4, 400);
     p.rect(0, 394, 400, 6);
     p.rect(394, 0, 6, 400);
     if (unflaggedMines === flaggedSquares && !unflaggedMines && revealedSquares === 225){
         mineRevealed = -Number.MAX_VALUE;
     }
 }
 
 function mouseClicked(p){ 
     if (!mineRevealed){
         reveal(Math.floor((p.mouseX-4)/26), Math.floor((p.mouseY-4)/26));
     }
 }
 
 function keyPressed(p) {
     if (!mineRevealed){
         var newX = Math.floor((p.mouseX-4)/26);
         var newY = Math.floor((p.mouseY-4)/26);
         if (!flagged[newX][newY]){
             flagged[newX][newY] = true;
         }
         else if (flagged[newX][newY]){
             flagged[newX][newY] = false;
         }
     }
 }
