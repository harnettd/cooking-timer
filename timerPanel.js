class TimerPanel {
  constructor(div, onDelTimerPanel) {
    this.panel = div;
    if (onDelTimerPanel) {
      this.onDelTimerPanel = onDelTimerPanel;
    }

    this.panel.innerHTML = `
        <div>
          <input type="text" value="Untitled" />
          <button class="del"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div>
          <button class="plus-one-hr">+1 hr</i></button>
          <button class="plus-ten-min">+10 min</i></button>
          <button class="plus-one-min">+1 min</i></button>
          <button class="plus-ten-sec">+10 sec</i></button>
          <button class="plus-one-sec">+1 sec</i></button>
        </div>
        <div>
          <input type="text" class="display" value="${this.defaultTimerValue()}" />
        </div>
        <progress max="100" value="75"></progress>
        <div>
          <button class="play"><i class="fa-solid fa-play"></i></button>
          <button class="pause"><i class="fa-solid fa-pause"></i></button>
        </div>
    `;

    const delButton = this.panel.querySelector(".del");
    const plusOneHrButton = this.panel.querySelector(".plus-one-hr");
    const plusTenMinButton = this.panel.querySelector(".plus-ten-min");
    const plusOneMinButton = this.panel.querySelector(".plus-one-min");
    const plusTenSecButton = this.panel.querySelector(".plus-ten-sec");
    const plusOneSecButton = this.panel.querySelector(".plus-one-sec");
    const display = this.panel.querySelector(".display");
    const playButton = this.panel.querySelector(".play");
    const pauseButton = this.panel.querySelector(".pause");

    delButton.addEventListener("click", this.delTimerPanel);

    const timer = new Timer(display, playButton, pauseButton, {
      onStart() {},
      onTick() {},
      onComplete() {
        console.log("Complete");
      },
    });

    plusOneHrButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(3600);
    });

    plusTenMinButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(600);
    });

    plusOneMinButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(60);
    });

    plusTenSecButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(10);
    });

    plusOneSecButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(1);
    });
  }

  delTimerPanel = () => {
    this.panel.nextSibling.remove();
    this.panel.remove();
    this.onDelTimerPanel && this.onDelTimerPanel();
    // Should we delete the TimerPanel itself?
  };

  defaultTimerValue = () => 0;
}
