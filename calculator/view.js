class CalculatorView {
    constructor() {
        this.historyDisplay = document.querySelector('.display-history');
        this.mainDisplay = document.querySelector('.display-main');
        this.buttons = document.querySelector('.buttons');
    }

    bindEvents(handler) {
        this.buttons.addEventListener('click', event => {
            const target = event.target;
            if (target.tagName !== 'BUTTON') return;
            handler(target.innerText, target.dataset.type);
        });
    }

    update(expression, result = '') {
        if (this.historyDisplay) {
            this.historyDisplay.innerText = expression || '';
        }
        if (this.mainDisplay) {
            this.mainDisplay.innerText = result || expression || '0';
        }
    }
}