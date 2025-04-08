let nextId = 1;

const incNextId = () => {
  nextId += 1;
};

const addBtn = document.querySelector("#add-btn-0");
const newTimerPanelButton = new NewTimerPanelButton(nextId, addBtn);
newTimerPanelButton.addTimerPanel();

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
