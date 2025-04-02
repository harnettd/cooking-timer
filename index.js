console.log("JS loaded");

let nextId = 0;

const incNextId = () => {
  nextId += 1;
};

// let duration;
// const timer = new Timer(durationInput, startButton, pauseButton, {
//   onStart(totalDuration) {
//     duration = totalDuration;
//   },
//   onTick(timeRemaining) {
//     circle.setAttribute("stroke-dashoffset",
//       perimeter * ( timeRemaining / duration - 1)
//     );
//   },
//   onComplete() {
//     console.log("Complete");
//   },
// });
