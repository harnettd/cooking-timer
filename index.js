const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.getElementById("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Start");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset -= 1;
  },
  onComplete() {
    console.log("Complete");
  },
});
