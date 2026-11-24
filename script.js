// script.js
let currentInput = '';

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function appendValue(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (e) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

