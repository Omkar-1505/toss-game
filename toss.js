var x;//for random variable
var v; // track the current player
var r; // track the choice
var y; // for coin type
var img;//image selection
const ICC="ICC";
const ipl="ipl";

function playeractive(select){
    if(select.value === "1") v=1;
    else v=2;
}
function cointype(select){
    if(select.value === "1") y=ICC;
    else y=ipl;
}
function choice(select){
    if(select.value === "1") r=1;
    else r=2;
}
if(!y) y=ICC;  //default values
if(!v) v=1;
if(!r) r=1;  

function toss(){
    x = Math.floor(Math.random() * 2) + 1; // Random number 1 or 2
    img=document.querySelector("img");
    img.src = `images/${y}_${x}.jpg`; 
    console.log("THE COIN IS TOSSED");
}
var res;//results
function result(){
    toss();
    res=document.querySelector(".work h2");
    if(v===1){
        if(r===x){
            res.innerHTML="PLAYER 1 WINS THE TOSS";
        }
        else res.innerHTML="PLAYER 2 WINS THE TOSS";
    }
    else{
        if(r===x){
            res.innerHTML="PLAYER 2 WINS THE TOSS";
        }
        else res.innerHTML="PLAYER 1 WINS THE TOSS";
    }
}
