class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindEvents(this.handleInput.bind(this));
    }

    handleInput(value, type) {
        if (type === 'number' || type === 'operator') {
            this.model.addInput(value);
            this.view.update(this.model.expression);
        } else if (type === 'equals') {
            const res = this.model.calculate();
            this.view.update(this.model.expression, res);
        } else if (type === 'clear') {
            this.model.reset();
            this.view.update('0', '0');
        }
    }
}

const app = new CalculatorController(new CalculatorModel(), new CalculatorView());