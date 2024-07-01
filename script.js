const hourselement = document.getElementById('hours')
const minuteselement = document.getElementById('minutes')
const secondselement = document.getElementById('seconds')

function newTime(){
const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

hourselement.textContent = fixTime(hours);
minuteselement.textContent = fixTime(minutes);
secondselement.textContent = fixTime(seconds);
}

function fixTime(time){
    return time <10 ? '0' + time : time
}
newTime();
setInterval (newTime, 1000);