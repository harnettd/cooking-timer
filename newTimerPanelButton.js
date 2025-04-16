class NewTimerPanelButton {
  constructor(btn, onAddTimerPanel) {
    this.btn = btn;
    if (onAddTimerPanel) {
      this.onAddTimerPanel = onAddTimerPanel;
    }
    this.btn.addEventListener("click", this.addTimerPanel);
  }

  addTimerPanel = () => {
    const div = document.createElement("div");
    div.classList.add("timer-panel");
    this.btn.insertAdjacentElement("afterend", div);
    new TimerPanel(div);

    this.onAddTimerPanel && this.onAddTimerPanel();
  };
}
