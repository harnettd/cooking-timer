class NewTimerPanelButton {
    constructor(btn, onAddTimerPanel) {
        this.btn = btn;
        if (onAddTimerPanel) {
            this.onAddTimerPanel = onAddTimerPanel
        };
        this.btn.addEventListener("click", this.addTimerPanel);
    }

    addTimerPanel = () => {
        const panel = document.createElement("div");
        panel.classList.add("timer-panel");
        this.btn.insertAdjacentElement("afterend", panel);
        new TimerPanel(panel);

        // I still think that creating a new NewTimerPanelButton
        // could be implemented as a callback somehow.
        const btn = document.createElement("button");
        btn.classList.add("add-btn");
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>';        
        panel.insertAdjacentElement("afterend", btn)
        new NewTimerPanelButton(btn, this.onAddTimerPanel);

        this.onAddTimerPanel && this.onAddTimerPanel();
    }
}
