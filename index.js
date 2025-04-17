function addNewTimerPanelButton() {
  const btn = document.createElement("button");
  btn.classList.add("add-btn");
  btn.innerHTML = '<i class="fa-solid fa-plus"></i>';        
  this.btn.nextElementSibling.insertAdjacentElement("afterend", btn)
  new NewTimerPanelButton(btn, this.onAddTimerPanel);
}

const newTimerPanelButton = new NewTimerPanelButton(
  document.querySelector("#add-btn-0"),
  addNewTimerPanelButton
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
