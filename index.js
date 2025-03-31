class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    onDurationChange = () => {}

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const timer = new Timer(durationInput, startButton, pauseButton);
