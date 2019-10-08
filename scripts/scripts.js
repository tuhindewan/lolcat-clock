let noon = 12;
let meridian;
let showCurrentTime = function () {
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours >= noon){
        meridian = 'PM';
    }else {
        meridian = 'AM';
    }

    if (hours > noon){
        hours = hours - noon;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';
    clock.innerText = clockTime;
};

showCurrentTime();