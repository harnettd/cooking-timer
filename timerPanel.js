const defaultTimerValue = 60;

class TimerPanel {
  constructor(panel, onDelTimerPanel) {
    this.panel = panel;
    if (onDelTimerPanel) {
      this.onDelTimerPanel = onDelTimerPanel;
    }

    const label = document.createElement("input");
    label.classList.add("timer-panel__label");
    label.value = "Untitled";

    const delButton = document.createElement("button");
    delButton.classList.add("timer-panel__del-btn");
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.addEventListener("click", this.delTimerPanel);

    const display = document.createElement("input");
    display.classList.add("timer-panel__display");
    display.value = defaultTimerValue;

    const playButton = document.createElement("button");
    playButton.classList.add("timer-panel__play-btn");
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';

    const pauseButton = document.createElement("button");
    pauseButton.classList.add("timer-panel__pause-btn");
    pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

    new Timer(display, playButton, pauseButton, {
      onStart() {},
      onTick() {},
      onComplete() {
        console.log("Complete");
      },
    });

    const labelRow = document.createElement("div");
    labelRow.classList.add("timer-panel__label-row");
    const displayWrapper = document.createElement("div");
    displayWrapper.classList.add("timer-panel__display-wrapper");
    const btnRow = document.createElement("div");
    btnRow.classList.add("timer-panel__btn-row");

    labelRow.appendChild(label);
    labelRow.appendChild(delButton);
    displayWrapper.appendChild(display);
    btnRow.appendChild(playButton);
    btnRow.appendChild(pauseButton);

    this.panel.appendChild(labelRow);
    this.panel.appendChild(displayWrapper);
    this.panel.appendChild(btnRow);
  }

  delTimerPanel = () => {
    this.panel.nextSibling.remove();
    this.panel.remove();
    this.onDelTimerPanel && this.onDelTimerPanel();
    // Should we delete the TimerPanel itself?
  };
}
