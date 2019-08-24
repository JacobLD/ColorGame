//Math.floor(Math.random() * 256); random int from 0-255

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
        for(var i = 0; i < 6; i++){
            var color = colors[i];
            console.log(color.id);
            if(i == winningIndex){
                color.addEventListener("click", function(){
                    //winning set
                });
            } else {
                color.addEventListener("click", function(){
                    $("#" + color.id).fadeTo(1000, 0.1, null);
                });
            }
        }
    }
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