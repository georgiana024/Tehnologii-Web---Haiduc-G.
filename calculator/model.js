class CalculatorModel {
    constructor() {
        this.expression = '';
        this.result = '';
    }

    reset() {
        this.expression = '';
        this.result = '';
    }

    addInput(value) {
        if (value === '.') {
            const parts = this.expression.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1];

            if (lastPart.includes('.')) return;
            
            if (this.expression === '' || /[\+\-\*\/]$/.test(this.expression)) {
                this.expression += '0';
            }
        }

        if (this.result !== '' && !isNaN(value)) {
            this.expression = value;
            this.result = '';
        } else {
            this.expression += value;
            this.result = '';
        }
    }

    calculate() {
        try {
            if (/\/0(?![1-9\.])/.test(this.expression)) return "Error: Div by 0";
            
            if (this.expression === '') return '0';

            const evalResult = new Function(`return ${this.expression}`)();
            
            this.result = Number(Math.round(evalResult + 'e8') + 'e-8').toString();
            
            this.expression = this.result;
            return this.result;
        } catch (e) {
            return "Error";
        }
    }
}