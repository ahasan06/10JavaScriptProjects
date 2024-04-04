const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
const timerBg = document.getElementById("timerBg");

const breakBtn = document.getElementById("break");
const Long_breakBtn = document.getElementById("Long_break");
const workBtn = document.getElementById("work");

// Todo  variable
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTask = document.getElementById('addTask');
const checked = document.getElementById('checked');


let interval;
let timeLeft = 1500; // 25 minutes in seconds
const breakTimeDuration = 300;
const Long_breakDuration = 900;
const work_time = 1500;

// by default work btn color  is active
workBtn.classList.add("active");

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Add leading zeros if necessary
    let formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    timerEl.innerHTML = formattedTime;
    
}

function startTimer() {
    
    stopEl.classList.remove("red-text");
    resetEl.classList.remove("red-text");
    startEl.classList.add("red-text");
    timerBg.classList.add("timer-bg");
    // Check if an interval is already running
    if (!interval) {


        interval = setInterval(() => {
            timeLeft--; // Decrement timeLeft
            updateTimer();

            // Check if timeLeft is zero
            if (timeLeft <= 0) {
                clearInterval(interval); // Stop the timer
            }
        }, 1000);
    }
}

function stopTimer() {
    startEl.classList.remove("red-text");
    stopEl.classList.add("red-text");
    resetEl.classList.remove("red-text");
    timerBg.classList.remove("timer-bg");
    clearInterval(interval); // Stop the timer
    interval = null; 
}

function resetTimer() {

    workBtn.classList.add("active");
    breakBtn.classList.remove("active");
    Long_breakBtn.classList.remove("active");



    startEl.classList.remove("red-text");
    stopEl.classList.remove("red-text");
    resetEl.classList.add("red-text");
    timerBg.classList.remove("timer-bg");
    clearInterval(interval);
   
    timeLeft = 1500;
    interval = null; 
    updateTimer();

    
}

function startBreak(){
    workBtn.classList.remove("active");
    breakBtn.classList.add("active");
    Long_breakBtn.classList.remove("active");


    clearInterval(interval);
    timeLeft = breakTimeDuration;
    stopTimer();
    updateTimer(); 
   

}function LongBreak(){
    workBtn.classList.remove("active");
    breakBtn.classList.remove("active");
    Long_breakBtn.classList.add("active");
    clearInterval(interval);
    timeLeft = Long_breakDuration;
    stopTimer();
    updateTimer(); 


}
function work(){
    workBtn.classList.add("active");
    breakBtn.classList.remove("active");
    Long_breakBtn.classList.remove("active");
    clearInterval(interval);
    timeLeft = work_time;
    stopTimer();
    updateTimer(); 
    startTimer();

}


startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
breakBtn.addEventListener("click", startBreak);
Long_breakBtn.addEventListener("click", LongBreak);
workBtn.addEventListener("click", work);


// todo js
addTask.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("Write something!");
    } else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        inputBox.value = ''; 

        const span = document.createElement('span');
        span.textContent = "\u00d7";
        li.appendChild(span);

     
        
    }
  
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

