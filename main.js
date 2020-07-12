
var min=0,sec=0,msec=0;
var interval;
var minH=document.getElementById('minH');
var secH=document.getElementById('secH');
var msecH=document.getElementById('msecH');
console.log(msecH)
function increse(){
    msec++
   msecH.innerHTML=msec;
   if(msec>=100){

    sec++
    secH.innerHTML=sec;
    msec=0;
}
else if(sec >= 60){
   min++
   minH.innerHTML=min;
   sec=0; 
}
}
function start(){
    interval=setInterval(increse,10);
}
function pause(){
    clearInterval(interval);
}

function clears(){
    min=0;
    sec=0;
    msec=0;
    minH.innerHTML=min;
    secH.innerHTML=sec;
    msecH.innerHTML=msec;
    pause();
}