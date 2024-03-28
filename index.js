//------------Player 1------------------
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomDiceSource);


//------------Player 2------------------
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomDiceSource2);

//----------change heading----------------
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  "🚩 Play 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML =  "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML =  "Draw!";
}