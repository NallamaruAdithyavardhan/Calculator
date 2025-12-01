// Calculator class to handle all calculator operations
        class Calculator {
            constructor(previousOperandElement, currentOperandElement) {
                this.previousOperandElement = previousOperandElement;
                this.currentOperandElement = currentOperandElement;
                this.clear();
            }

            // Clear all values and reset calculator
            clear() {
                this.currentOperand = '';
                this.previousOperand = '';
                this.operation = undefined;
                this.updateDisplay();
            }

            // Delete the last digit
            delete() {
                this.currentOperand = this.currentOperand.toString().slice(0, -1);
                this.updateDisplay();
            }

            // Append number to current operand
            appendNumber(number) {
                // Prevent multiple decimal points
                if (number === '.' && this.currentOperand.includes('.')) return;
                
                this.currentOperand = this.currentOperand.toString() + number.toString();
                this.updateDisplay();
            }

            // Choose mathematical operation
            chooseOperation(operation) {
                if (this.currentOperand === '') return;
                
                // If there's a previous operand, compute before setting new operation
                if (this.previousOperand !== '') {
                    this.compute();
                }
                
                this.operation = operation;
                this.previousOperand = this.currentOperand;
                this.currentOperand = '';
                this.updateDisplay();
            }

            // Perform the calculation
            compute() {
                let computation;
                const prev = parseFloat(this.previousOperand);
                const current = parseFloat(this.currentOperand);
                
                // Validate input
                if (isNaN(prev) || isNaN(current)) return;
                
                // Perform operation based on operator
                switch (this.operation) {
                    case '+':
                        computation = prev + current;
                        break;
                    case '-':
                        computation = prev - current;
                        break;
                    case '*':
                        computation = prev * current;
                        break;
                    case '/':
                        // Handle division by zero error
                        if (current === 0) {
                            this.currentOperand = 'Error';
                            this.previousOperand = '';
                            this.operation = undefined;
                            this.updateDisplay();
                            setTimeout(() => this.clear(), 1500);
                            return;
                        }
                        computation = prev / current;
                        break;
                    default:
                        return;
                }
                
                // Round to avoid floating point errors
                computation = Math.round(computation * 100000000) / 100000000;
                
                this.currentOperand = computation;
                this.operation = undefined;
                this.previousOperand = '';
                this.updateDisplay();
            }

            // Format number for display with commas
            getDisplayNumber(number) {
                const stringNumber = number.toString();
                const integerDigits = parseFloat(stringNumber.split('.')[0]);
                const decimalDigits = stringNumber.split('.')[1];
                let integerDisplay;
                
                if (isNaN(integerDigits)) {
                    integerDisplay = '';
                } else {
                    integerDisplay = integerDigits.toLocaleString('en', {
                        maximumFractionDigits: 0
                    });
                }
                
                if (decimalDigits != null) {
                    return `${integerDisplay}.${decimalDigits}`;
                } else {
                    return integerDisplay;
                }
            }

            // Update the display
            updateDisplay() {
                if (this.currentOperand === 'Error') {
                    this.currentOperandElement.innerText = this.currentOperand;
                    this.currentOperandElement.classList.add('error');
                } else {
                    this.currentOperandElement.classList.remove('error');
                    this.currentOperandElement.innerText = 
                        this.getDisplayNumber(this.currentOperand) || '0';
                }
                
                if (this.operation != null) {
                    const operatorSymbol = this.operation === '*' ? '×' : this.operation;
                    this.previousOperandElement.innerText = 
                        `${this.getDisplayNumber(this.previousOperand)} ${operatorSymbol}`;
                } else {
                    this.previousOperandElement.innerText = '';
                }
            }
        }

        // Initialize calculator
        const previousOperandElement = document.getElementById('previousOperand');
        const currentOperandElement = document.getElementById('currentOperand');
        const calc = new Calculator(previousOperandElement, currentOperandElement);

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            // Numbers and decimal point
            if ((e.key >= 0 && e.key <= 9) || e.key === '.') {
                calc.appendNumber(e.key);
            }
            // Operators
            if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
                calc.chooseOperation(e.key);
            }
            // Enter or equals for compute
            if (e.key === 'Enter' || e.key === '=') {
                e.preventDefault();
                calc.compute();
            }
            // Escape or 'c' for clear
            if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
                calc.clear();
            }
            // Backspace for delete
            if (e.key === 'Backspace') {
                e.preventDefault();
                calc.delete();
            }
        });