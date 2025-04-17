class TimerPanel {
  constructor(div, onDelTimerPanel) {
    this.panel = div;
    if (onDelTimerPanel) {
      this.onDelTimerPanel = onDelTimerPanel;
    }

    this.panel.innerHTML = 
      `
        <div>
          <input type="text" value="Untitled" />
          <button class="del"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div>
          <input type="text" class="display" value="${this.defaultTimerValue()}" />
        </div>
        <div>
          <button class="plus-ten-min">+10 min</i></button>
          <button class="plus-one-min">+1 min</i></button>
          <button class="play"><i class="fa-solid fa-play"></i></button>
          <button class="pause"><i class="fa-solid fa-pause"></i></button>
        </div>
    `;
    
    const display = this.panel.querySelector(".display");
    const delButton = this.panel.querySelector(".del");
    const plusTenMinButton = this.panel.querySelector(".plus-ten-min");
    const plusOneMinButton = this.panel.querySelector(".plus-one-min");
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
 
    plusTenMinButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(600);
    });

    plusOneMinButton.addEventListener("click", () => {
      timer.increaseTimeRemaining(60);
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
