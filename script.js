function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return alert('Error: division by 0 not allowed');
}

let operandoUno = 0;
let operandoDos = 0;
let operador = "";

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case "*":
            return multiply(numberOne, numberTwo);
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
        default:
            return null;
    }
}

let paraDisplay = document.querySelector('#displayParagraph');
let divDigits = document.querySelector('.underDisplay');
let equalButton = document.querySelector('#equal');
let clearButton = document.querySelector('#clear');

divDigits.addEventListener('click', (evento) => {
    let string = evento.target.textContent;
    paraDisplay.textContent += string;
});

equalButton.addEventListener('click', (evento) => {
    let cant = paraDisplay.textContent.length;
    let operadorFound = false;
    let numbers = "0123456789";
    let firstNumber = '';
    let secondNumber = '';
    let operadorFromOperation = '';

    for (let i = 0; i < cant; i++) {
        let char = paraDisplay.textContent[i];
        if (operadorFound) {
            secondNumber += char;
        } else {
            if (numbers.includes(char)) {
                firstNumber += char;
            } else {
                operadorFound = true;
                operadorFromOperation = char;
            }
        }
    }

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let result = operate(operadorFromOperation, firstNumber, secondNumber);
    paraDisplay.textContent = result;
});

clearButton.addEventListener('click', (evento) => {

    paraDisplay.textContent = '';

})