class TimerPanel {
  constructor(id, panel, onDelTimerPanel) {
    this.id = id;
    this.panel = panel;
    if (onDelTimerPanel) {
      this.onDelTimerPanel = onDelTimerPanel;
    }

    this.input = document.createElement("input");
    this.input.setAttribute("placeholder", "Untitled");
    this.delButton = document.createElement("button");
    this.delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    this.delButton.addEventListener("click", this.delTimerPanel);
    this.display = document.createElement("input");
    this.display.value = "60";
    // this.progressMeter = document.createElement("p")
    this.playButton = document.createElement("button");
    this.playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    this.pauseButton = document.createElement("button");
    this.pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    this.timer = new Timer(this.display, this.playButton, this.pauseButton, {
      onStart() {},
      onTick() {},
      onComplete() {
        console.log("Complete");
      },
    });

    const labelRow = document.createElement("div");
    const displayRow = document.createElement("div");
    const btnRow = document.createElement("div");

    labelRow.appendChild(this.input);
    labelRow.appendChild(this.delButton);
    displayRow.appendChild(this.display);
    btnRow.appendChild(this.playButton);
    btnRow.appendChild(this.pauseButton);

    this.panel.appendChild(labelRow);
    this.panel.appendChild(displayRow);
    this.panel.appendChild(btnRow);
  }

  delTimerPanel = () => {
    this.panel.nextSibling.remove();
    this.panel.remove();
    this.onDelTimerPanel && this.onDelTimerPanel();
    // Should we delete the TimerPanel itself?
  };
}
