const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Start");
  },
  onTick() {
    console.log("Tick");
  },
  onComplete() {
    console.log("Complete");
  },
});
