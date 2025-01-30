
//Button Stuff

let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")
let qtrNumber = document.getElementById("qtr-number")
let countHome = 0
let countAway = 0

function incrementHomeSingle() {
    countHome += 1
    scoreHome.textContent = countHome
}
function incrementHomeDouble() {
    countHome += 2
    scoreHome.textContent = countHome
}
function incrementHomeTriple() {
    countHome += 3
    scoreHome.textContent = countHome
}
function incrementAwaySingle() {
    countAway += 1
    scoreAway.textContent = countAway
}
function incrementAwayDouble() {
    countAway += 2
    scoreAway.textContent = countAway
}
function incrementAwayTriple() {
    countAway += 3
    scoreAway.textContent = countAway
}

function resetBtn() {
    countHome = 0
    countAway = 0
    scoreHome.textContent = countHome
    scoreAway.textContent = countAway
}

function qtrFirst() {
    qtrNumber.textContent = 1
    startTimer(1)
}
function qtrSecond() {
    qtrNumber.textContent = 2
    startTimer(2)
}
function qtrThird() {
    qtrNumber.textContent = 3
    startTimer(3)
}
function qtrFourth() {
    qtrNumber.textContent = 4
    startTimer(4)
}

// Timer logistics

let timerInterval;
let timeRemaining = 12 * 60; 
let currentQuarter = null; 

function startTimer(quarter) {
   
    if (quarter !== currentQuarter) {
        resetTimer();
        currentQuarter = quarter; 
    }

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById("timer");

    if (timeRemaining > 0) {
        timeRemaining--; // Decrease time by 1 second
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;  
    } else {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
        timerElement.textContent = "0:00";
    }
}

function resetTimer() {
    clearInterval(timerInterval); 
    timeRemaining = 12 * 60; 
    document.getElementById("timer").textContent = "12:00"; 
}

