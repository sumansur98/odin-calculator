let isChain = false;
let firstNum, secondNum, result;
function add(num1, num2){
    return num1+num2;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b ;
}

function operate(operator, a, b){
    if(operator === '+')    add(a,b)
    if(operator === '-')    subtract(a,b)
    if(operator === '*')    multiply(a,b)
    if(operator === '/')    divide(a,b)
}

function display(num){
    let currText = document.querySelector("#calculator-display").textContent;
    let updateText = `${currText}${num}`;
    inputNumber = Number(updateText);
    document.querySelector("#calculator-display").textContent = updateText;
}




