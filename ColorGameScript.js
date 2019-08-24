//Math.floor(Math.random() * 256); random int from 0-255

/* Masthead */
var masthead = document.getElementById("masthead");

/* Text Fields */
var rgbText = document.getElementById("rgbText");

/* Buttons */
var newColorsbtn = document.getElementById("newColorsBtn");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

/* Color Fields */
var colors = [];
colors.push(document.getElementById("c1"));
colors.push(document.getElementById("c2"));
colors.push(document.getElementById("c3"));
colors.push(document.getElementById("c4"));
colors.push(document.getElementById("c5"));
colors.push(document.getElementById("c6"));

/* Vars */
var winningIndex = getRandomUpTo(5);
var easy = true;
var gameOver = false;

function getRandomUpTo(max){
    return Math.floor(Math.random() * max);
}

function updateText(){
    rgbText.innerHTML = colors[winningIndex].style.backgroundColor.toUpperCase();;
}

// hard will have two values fixed
function resetGame(){
    if(easy){
        setEasyColors();
    } else {
        setHardColors();
    }
    winningIndex = getRandomUpTo(5);
    updateText();
}

function setEasyColors(){
    for(var i = 0; i < 6; i++){
        var color = colors[i];
        var r = getRandomUpTo(255);
        var g = getRandomUpTo(255);
        var b = getRandomUpTo(255);
        color.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")";
    }
}

function setHardColors(){
    var colorThatChangesIndex = getRandomUpTo(2);
    var firstConst = getRandomUpTo(255);
    var secondConst = getRandomUpTo(255);

    if(colorThatChangesIndex == 0){
        for(var i = 0; i < 6; i++){
            var color = colors[i];
            var r = getRandomUpTo(255);
            var g = firstConst;
            var b = secondConst;
            color.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")";
        }
    } else if(colorThatChangesIndex == 1){
        for(var i = 0; i < 6; i++){
            var color = colors[i];
            var r = firstConst;
            var g = getRandomUpTo(255);
            var b = secondConst;
            color.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")";
        }
    } else {
        for(var i = 0; i < 6; i++){
            var color = colors[i];
            var r = firstConst;
            var g = secondConst;
            var b = getRandomUpTo(255);
            color.style.backgroundColor = "rgb("+ r + ", " + g + ", " + b + ")";
        }
    }
}

function makeSolid(btn){
    btn.style.backgroundColor = "#3c76ae";
    btn.style.color = "white";
}

function removeSolid(btn){
    btn.style.backgroundColor = "white";
    btn.style.color = "#3c76ae";
}

function createColorListeners(){
    if(!gameOver){
        colors[0].addEventListener("click", function(){
            if(winningIndex == 0){
                win();
            } else {
                $("#" + colors[0].id).fadeTo(1000, 0.1, null);
            }
        });

        colors[1].addEventListener("click", function(){
            if(winningIndex == 1){
                win();
            } else {
                $("#" + colors[1].id).fadeTo(1000, 0.1, null);
            }
        });

        colors[2].addEventListener("click", function(){
            if(winningIndex == 2){
                win();
            } else {
                $("#" + colors[2].id).fadeTo(1000, 0.1, null);
            }
        });

        colors[3].addEventListener("click", function(){
            if(winningIndex == 3){
                win();
            } else {
                $("#" + colors[3].id).fadeTo(1000, 0.1, null);
            }
        });

        colors[4].addEventListener("click", function(){
            if(winningIndex == 4){
                win();
            } else {
                $("#" + colors[4].id).fadeTo(1000, 0.1, null);
            }
        });

        colors[5].addEventListener("click", function(){
            if(winningIndex == 5){
                win();
            } else {
                $("#" + colors[5].id).fadeTo(1000, 0.1, null);
            }
        });
    }
}

function win(){
    var winColor = colors[winningIndex].style.backgroundColor;
    colors.forEach(color => {
        color.style.backgroundColor = winColor;
        $("#" + color.id).fadeTo(1000, 1, null);
    });
    masthead.style.backgroundColor = winColor;
}

newColorsbtn.addEventListener("click", function(){
    resetGame();
});

easyBtn.addEventListener("click", function(){
    if(!easy){
        easy = true;
        makeSolid(easyBtn);
        removeSolid(hardBtn);
        resetGame();
    }
});

hardBtn.addEventListener("click", function(){
    if(easy){
        easy = false;
        makeSolid(hardBtn);
        removeSolid(easyBtn);
        resetGame();
    }
});


resetGame();
createColorListeners();
makeSolid(easyBtn);