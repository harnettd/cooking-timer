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
        <button class="plus-one-hr">+1 hr</button>
        <button class="plus-ten-min">+10 min</button>
        <button class="plus-one-min">+1 min</button>
        <button class="plus-ten-sec">+10 sec</button>
        <button class="plus-one-sec">+1 sec</button>
      </div>
      <div>
        <input type="text" class="display"/>
        <button class="clear"><i class="fa-solid fa-delete-left"></i></button>
      </div>
        <progress class="progress" max="100" value="100"></progress>
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
    const clearButton = this.panel.querySelector(".clear");
    const progress = this.panel.querySelector(".progress");
    const playButton = this.panel.querySelector(".play");
    const pauseButton = this.panel.querySelector(".pause");

    delButton.addEventListener("click", this.delTimerPanel);

    const timer = new Timer(display, playButton, pauseButton, {
      onPlay: (duration) => {
        this.duration = duration;
      },

      onTick: (timeRemaining) => {
        progress.value = ((timeRemaining / this.duration) * 100).toFixed(1);
      },

      onComplete() {
        const audio = new Audio("assets/sounds/generic-alarm-clock-86759.mp3");
        audio.play();
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

    clearButton.addEventListener("click", timer.clearTimeRemaining);
  }

  delTimerPanel = () => {
    this.panel.nextSibling.remove();
    this.panel.remove();
    this.onDelTimerPanel && this.onDelTimerPanel();
    // TODO: Should we (somehow) delete the TimerPanel object itself?
  };
}
