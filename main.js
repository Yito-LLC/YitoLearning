
const months = document.getElementById('months');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const tdate = new Date("January 1 2027 00:00:00").getTime();

function timer(){
    const cDate = new Date().getTime();
    const distance = tdate -cDate; //in ms

    const Months = Math.floor(distance/1000/60/60/24/30);
    months.innerHTML = Months;

    const Days = Math.floor(distance/1000/60/60/24)%30;
    days.innerHTML = Days;

    const Hours = Math.floor(distance/1000/60/60)%24;
    hours.innerHTML = Hours;

    const Minutes = Math.floor(distance/1000/60)%60;
    minutes.innerHTML = Minutes;

    const Seconds = Math.floor(distance/1000)%60;
    seconds.innerHTML = Seconds;


    if (distance < 0){
        months.innerHTML = "00";
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;

    }
}

setInterval(timer, 1000);