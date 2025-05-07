var x = Math.floor(Math.random()*2)+1;
function player1(){
    var v=1;
}
function player2(){
    var v=0;
}
function ipl_coin(){
    var y = ipl;
}
function icc_coin(){
    var y = ICC;
}
function toss(){
    var image=document.querySelector("img");
    image.innerHTML="<img src= images/y_x.jpg>";
}

function Heads(){
    var r = 1;
    //console.log(r);
}
function Tails(){
    var r = 2;
}
var w =  document.querySelector(".result");
if (r===x){
    if (v===1){
        w.innerHTML="PLAYER 1 WINS THE TOSS!!!";
    }
    else {
        w.innerHTML="PLAYER 2 WINS THE TOSS!!!";
    }
}
else{
    if (v==1){
        w.innerHTML="PLAYER 2 WINS THE TOSS!!!";
    }
    else{
        w.innerHTML="PLAYER 1 WINS THE TOSS!!!";
    }
}
