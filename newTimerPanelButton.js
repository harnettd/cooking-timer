class NewTimerPanelButton {
    constructor(id, btn, onAddTimerPanel) {
        this.id = id;
        this.btn = btn;
        if(onAddTimerPanel) {
            this.onAddTimerPanel = onAddTimerPanel
        };

        this.btn.addEventListener("click", this.addTimerPanel);
    }

    addTimerPanel = () => {
        const panel = document.createElement("div");
        // panel.setAttribute("id", `timer-panel-${this.id}`);
        panel.classList.add("timer-panel");
        this.btn.insertAdjacentElement("afterend", panel);
        new TimerPanel(this.id, panel);

        const btn = document.createElement("button");
        // btn.setAttribute("id", `add-btn-${this.id}`);
        btn.classList.add("add-btn");
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        
        console.log(btn);
        console.log(panel);

        panel.insertAdjacentElement("afterend", btn)
        new NewTimerPanelButton(this.id, btn, this.onAddTimerPanel);

        this.onAddTimerPanel && this.onAddTimerPanel();
    }
}
