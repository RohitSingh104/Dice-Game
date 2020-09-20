var randomNumber=Math.floor(Math.random()*6)+1;
var image1="images/dice"+randomNumber+".png";

var firstImg=document.querySelectorAll("img")[0];
firstImg.setAttribute("src",image1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+randomNumber2+".png";

var secondImg=document.querySelectorAll("img")[1];
secondImg.setAttribute("src",image2);



if(randomNumber > randomNumber2) 
{

	document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(randomNumber < randomNumber2){
	document.querySelector("h1").innerHTML="Player 2 Wins!";
}else
{
	document.querySelector("h1").innerHTML="Draw!";
}