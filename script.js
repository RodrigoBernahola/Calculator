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

    return 'Error division by 0 not allowed';
}

let operandoUno = 0;
let operandoDos = 0;
let operador = "";


function operate(operator, numberOne, numberTwo) {

    switch (operator) {

        case "*":
            multiply(numberOne, numberTwo);
            break;
        
        case "+":
            add(numberOne, numberTwo);
            break;

        case "-":
            subtract(numberOne, numberTwo);
            break;

        case "/":
            divide(numberOne, numberTwo);
            break;

    }

}
