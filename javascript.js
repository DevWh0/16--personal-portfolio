let RanMess = document.getElementsByClassName('RanMess');

RanMess.onclick = function() {
    RanMess.innerHTML = "Random Message : For this project, i will build a message generator program. Every time a user runs a program, they should get a new, randomized output. To make my program truly random, the message that it outputs should be made up of at least three different pieces of data.";
};

let timer = document.getElementById('timer');
let dateStart = date.parsec('2011-10-10');
let dateNow = date.now();

let diffTime = dateNow - dateStart;
timer.innerHTML = 'diffTime';