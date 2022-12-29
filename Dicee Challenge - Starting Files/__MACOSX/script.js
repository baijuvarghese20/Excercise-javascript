var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice" + randomNumber1 +".png"; //dice .png
var randomImageSource = "images/" + randomDiceImage; //images/dice1-6.png
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var randomImageSource2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1< randomNumber2){
  document.querySelector("h1").innerHTML="&#128681 Player 2 wins"
}else if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="&#128681 player 1 to wins"
}else{
  document.querySelector("h1").innerHTML ="draw!"
}
