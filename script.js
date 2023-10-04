let a;
let time;
let date;
let changeFormate = false;
let changeText =false;
const clock = document.querySelector('.clock');

const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
const options_2 = {timeZone: 'Asia/Kolkata', hour12: false,hour: '2-digit', minute: '2-digit', second: '2-digit'}

function changeTime(){
    changeFormate = changeFormate ? false : true;
    changeText = changeText ? true : false;
}

setInterval(() =>{
    a = new Date();
    // Analog Watch
    document.querySelector('.hand_container').style.transform= `rotateZ(${a.getSeconds() * 6}deg)`;
    document.querySelector('.hand_container-2').style.transform= `rotateZ(${(a.getMinutes()/60) * 360}deg)`;
    document.querySelector('.hand_container-3').style.transform= `rotateZ(${((a.getHours()%12) * 30) + ((a.getMinutes()/60) * 30)}deg)`;


 if(changeFormate){
    // 24 Hour Formate
time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
 }
//  else if(changeText){
//      document.getElementById('btn-b').innerHTML="12hr Formate";   
//  }
else{
    // 12 Hour Formate
time =a.toLocaleTimeString();
// document.getElementById('btn-b').innerHTML="24hr Formate"; 
}


 

date = a.toLocaleString(undefined, options);
document.getElementById('time').innerHTML = time + "<br>on " + date;
},1000);


 
  

