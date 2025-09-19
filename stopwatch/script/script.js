const display = document.getElementById('display');
const ssBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');


let timer;
let second = 0, minute = 0, hour = 0;
// second, minute, hour variables to keep track of time

let running  = false;   


//Update the Display 
function updateDisplay() {
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    display.innerText = `${h}:${m}:${s}`;
}


// Start the stopwatch
function startStopwatch() {
    timer = setInterval(() => {
        second++;
        if (second === 60) {second = 0; minute++;}
        if (minute === 60) { minute = 0; hour++;}
        updateDisplay();
    }, 1000);
}

// Start or Stop the stopwatch by clicking the button
ssBtn.addEventListener('click', () => {
    if (!running) {
        startStopwatch();
        ssBtn.innerText = "Stop";
        running = true;
    } else {
        clearInterval(timer);
        ssBtn.innerText = "Start";
        running = false;
    }
});

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    updateDisplay();
    ssBtn.innerText = "Start";
    running = false;
});
