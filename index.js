const newTimerPanelButton = new NewTimerPanelButton(
  document.querySelector("#add-btn-0")
);
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
