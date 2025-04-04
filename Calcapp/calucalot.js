const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value >= '0' && value <= '9' || value === '.') {
            if (currentInput === '0' && value !== '.') currentInput = '';
            currentInput += value;
            updateDisplay(currentInput);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput === '') return;

            if (previousInput !== '') calculate();

            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

document.getElementById('equals').addEventListener('click', () => {
    if (currentInput === '' || previousInput === '') return;
    calculate();
    operator = null;
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
});

function updateDisplay(value) {
    display.textContent = value;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    updateDisplay(currentInput);
}