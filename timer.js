class Timer {
    constructor(display, playButton, pauseButton, callbacks) {
      this.display = display;
      this.playButton = playButton;
      this.pauseButton = pauseButton;
      if (callbacks) {
        this.onPlay = callbacks.onPlay;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
      }
      this.playButton.addEventListener("click", this.play);
      this.pauseButton.addEventListener("click", this.pause);
      this.clearTimeRemaining();
    }

    delta_time = () => 100;
  
    play = () => {
      this.onPlay && this.onPlay(this.timeRemaining);
      this.tick();
      this.intervalId = setInterval(this.tick, this.delta_time());
    };
  
    pause = () => {
      clearInterval(this.intervalId);
    };
  
    onDurationChange = () => {};
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        this.onComplete && this.onComplete();
      } else {
        this.timeRemaining = this.timeRemaining - this.delta_time() / 1000.;
        this.onTick && this.onTick(this.timeRemaining);
      }
    };

    increaseTimeRemaining = (seconds) => {
      this.timeRemaining += seconds;
    };

    clearTimeRemaining= () => {
      this.timeRemaining = 0;
    }
  
    get timeRemaining() {
      return parseFloat(this.display.value);
    }
  
    set timeRemaining(time) {
      this.display.value = time.toFixed(1);
    }
  }
