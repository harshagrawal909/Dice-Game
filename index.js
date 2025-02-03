var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomimage1="./images/dice"+randomnumber1+".png";
var randomimage2="./images/dice"+randomnumber2+".png";
document.querySelector("img.left").src = randomimage1;
document.querySelector("img.right").src = randomimage2;

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
    
    document.querySelector("h1").innerHTML="Draw!!";
}

