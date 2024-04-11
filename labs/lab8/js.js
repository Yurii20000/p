const input = document.querySelector('.input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const calculateBtn = document.querySelector('.calculate');

let currentInput = '';
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
        currentInput += op.textContent;
        updateInput();
    });
});

// Function to handle clear button click
clearBtn.addEventListener('click', () => {
    currentInput = '';
    result = null;
    updateInput();
});

// Function to handle calculate button click
calculateBtn.addEventListener('click', () => {
    try {
        result = eval(currentInput);
        currentInput = result.toString();
        updateInput();
    } catch (error) {
        currentInput = 'Error';
        updateInput();
    }
});
