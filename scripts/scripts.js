let noon = 12;
let wakeUpTime = 7;
let lunchTime = 13;
let napTime = lunchTime + 2;
let evening = 18;
let partyTime;
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

let updateClock = function () {
    showCurrentTime();

    let image;
    let messageText;
    let currentHour = new Date().getHours();
    let lolcatImage = document.getElementById('lolcatImage');
    let timeEvent = document.getElementById('timeEvent');
    if (currentHour == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }else if (currentHour == wakeUpTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }else if (currentHour == lunchTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }else if (currentHour == napTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    }else if (currentHour < noon){
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }else if (currentHour >= evening)
    {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    lolcatImage.src = image;
    timeEvent.innerText = messageText;
};
setInterval(updateClock, 1000);

// Activates Wakeup Time

let wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

wakeUpTimeSelector.addEventListener('change', function () {
    wakeUpTime = wakeUpTimeSelector.value;
});

// Activates Lunch Time

let lunchTimeSelector = document.getElementById('lunchTimeSelector');

lunchTimeSelector.addEventListener('change', function () {
   lunchTime = lunchTimeSelector.value;
});

// Activates Nape Time

let napTimeSelector = document.getElementById('napTimeSelector');

napTimeSelector.addEventListener('change', function () {
    napTime = napTimeSelector.value;
});

// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function()
{
    console.log(partyTime);
    if (partyTime < 0)
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);

partyEvent();
