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
        if (operator === '') {
            firstValue = currentInput;
        } else {
            secondValue = currentInput;
        }
        currentInput += number.textContent;
        updateInput();
    });
});

// Function to handle operator button clicks
operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.textContent;
        currentInput = '';
        updateInput();
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
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    firstValue = result;
    secondValue = null;
    result = null;
    updateInput();
}

// Function to handle calculate button click
calculateBtn.addEventListener('click', () => {
    if (firstValue !== null && secondValue !== null) {
        calculate();
    }
});
