const newyears="1 Jan 2023"
const dayel=document.getElementById("days");
const hourel=document.getElementById("hours");
const minel=document.getElementById("mins");
const secel=document.getElementById("secs");
function countdown(){
    const currentdate= new Date();
    const newyeardate=new Date(newyears);
    const diff=newyeardate-currentdate;
    //console.log(diff);
   let totalsecs=(diff)/1000;
   let days=Math.ceil((totalsecs/3600)/24);
   let hours=Math.ceil(totalsecs/3600)%24;
   let mins=Math.ceil(totalsecs/60)%60;
   let secs=Math.ceil(totalsecs)%60;
   console.log(days,hours,mins,secs);
   
   dayel.innerHTML=formatime(days);
   hourel.innerHTML=formatime(hours);
   minel.innerHTML=formatime(mins);
    secel.innerHTML=formatime(secs);
}
function formatime(Time){
    if (Time<10){
        return `0${Time}`;
    }
    else{
        return Time;
    }
}
countdown();
setInterval(countdown,1000);