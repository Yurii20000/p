const input = document.querySelector('.input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const calculateBtn = document.querySelector('.calculate');

let currentInput = '';
let operator = '';
let firstValue = null;
let secondValue = null;
let result = null;

// Function to update the input display
function updateInput() {
    input.textContent = currentInput;
}

// Function to handle number button clicks
numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentInput += number.textContent;
        updateInput();
    });
});

// Function to handle operator button clicks
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (currentInput !== '') {
            operator = op.textContent;
            firstValue = parseFloat(currentInput);
            currentInput = '';
            updateInput();
        }
    });
});

// Function to handle clear button click
clearBtn.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstValue = null;
    secondValue = null;
    result = null;
    updateInput();
});

// Function to calculate the result
function calculate() {
    if (secondValue === null && currentInput !== '') {
        secondValue = parseFloat(currentInput);
    }

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            if (secondValue === 0) {
                result = 'Error';
            } else {
                result = firstValue / secondValue;
            }
            break;
        default:
            result = null;
            break;
    }

    currentInput = result.toString();
    operator = '';
    firstValue = result;
    secondValue = null;
    updateInput();
}

// Function to handle calculate button click
calculateBtn.addEventListener('click', () => {
    if (operator !== '' && currentInput !== '') {
        calculate();
    }
});
