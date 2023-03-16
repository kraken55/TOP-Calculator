function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    if (y == 0)
    {
        return NaN; 
    }
    return x / y;
}

function operate(operator, x, y)
{
    return operator(x, y);
}

let currentlyDisplayed = 0;
let operand = undefined;
let currentOperation = undefined;

function updateDisplay()
{
    const numericalDisplay = document.querySelector(".current-number-displayed");
    numericalDisplay.innerHTML = currentlyDisplayed;
}

function changeDisplayed(num)
{
    currentlyDisplayed = currentlyDisplayed * 10 + num;
    updateDisplay();
}

const numberKeys = document.querySelectorAll(".number-button");
numberKeys.forEach(key => key.addEventListener("click", () => {
    changeDisplayed(parseInt(key.innerHTML));
}));

const signKey = document.querySelector(".sign-button");
signKey.addEventListener("click", () => {
    currentlyDisplayed *= -1;
    updateDisplay();
});

const clearKey = document.querySelector(".clear-button");
clearKey.addEventListener("click", () => {
    currentlyDisplayed = 0;
    operand = 0;
    updateDisplay();
});

const operationKeys = document.querySelectorAll(".operator-button");
operationKeys.forEach(key => key.addEventListener("click", () => {
    currentOperation = key.dataset.operation;

    operand = 0;
    let temp = currentlyDisplayed;
    currentlyDisplayed = operand;
    operand = temp;
}));

const equalsKey = document.querySelector(".equals-button");
equalsKey.addEventListener("click", () => {
    currentlyDisplayed = operate(window[currentOperation], currentlyDisplayed, operand);
    operand = 0;
    currentOperation = undefined;
    updateDisplay();
});