var holes = [[" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " "]];
var columnNums = [5, 5, 5, 5, 5, 5, 5];
var turn = 1;
var winner = " ";
var gameOn = true;

function draw(p) {
    p.noStroke();
    if (gameOn){
        p.background(0, 0, 255);
        p.fill(197, 237, 197);
        p.rect(0, 0, 400, 40);
        p.rect(0, 390, 400, 10);
        p.rect(0, 0, 10, 400);
        p.rect(390, 0, 10, 400);
        p.fill(0, 0, 255);
        p.rect(50, 380, 20, 20);
        p.rect(330, 380, 20, 20);
        for (var i = 0; i < 7; i ++){
            for (var j = 0; j < 6; j ++){
                if (holes[i][j] === "R"){
                    p.fill(255, 0, 0);
                } else if (holes[i][j] === "Y"){
                    p.fill(255, 255, 0);
                } else {
                    p.fill(197, 237, 197);
                }
                p.ellipse((55*i)+35, (j*55)+80, 30, 30);
            }
        }
        if (winner === "R"){
            p.textSize(89);
            p.fill(0, 0, 0);
            p.text("Red wins!", 4, 150);
            gameOn = false;
        } else if (winner === "Y"){
            p.textSize(70);
            p.fill(0, 0, 0);
            p.text("Yellow wins!", 12, 150);
            gameOn = false;
        }
    }
}

function placeDisk(row) {
    if (turn % 2 === 1){
        holes[row][columnNums[row]] = "R";
    } else {
        holes[row][columnNums[row]] = "Y";
    } 
    turn += 1;
    columnNums[row] -= 1;
}

function mouseClicked(x, y) {
    placeDisk(Math.floor(x/55));
    for (var i = 0; i <= 6; i++){
        for (var j = 0; j <= 5; j++){
            if (j >= 3){
                if (holes[i][j] === holes[i][j-1] && holes[i][j-1] === holes[i][j-2] && holes[i][j-2] === holes[i][j-3] && holes[i][j] !== " "){
                    winner = holes[i][j];
                    break;
                }
            } if (i >= 3){
                if (holes[i][j] === holes[i-1][j] && holes[i-1][j] === holes[i-2][j] && holes[i-2][j] === holes[i-3][j] && holes[i][j] !== " "){
                    winner = holes[i][j];
                    break;
                }
            } if (i >= 3 && j >= 3){
                if (holes[i][j] === holes[i-1][j-1] && holes[i-1][j-1] === holes[i-2][j-2] && holes[i-2][j-2] === holes[i-3][j-3] && holes[i][j] !== " "){
                    winner = holes[i][j];
                    break;
                }
            } if (i <= 3 && j >= 3){
                if (holes[i][j] === holes[i+1][j-1] && holes[i+1][j-1] === holes[i+2][j-2] && holes[i+2][j-2] === holes[i+3][j-3] && holes[i][j] !== " "){
                    winner = holes[i][j];
                    break;
                }
            }
        }
    }
}

function keyPressed() {
    //do nothing
}
