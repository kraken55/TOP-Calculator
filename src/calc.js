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

let currentlyDisplayed = "0";
let operand = "";
let currentOperation = undefined;
let isDecimal = false;

function updateDisplay()
{
    const numericalDisplay = document.querySelector(".current-number-displayed");
    numericalDisplay.innerHTML = currentlyDisplayed;
}

function changeDisplayed(num)
{
    if (currentlyDisplayed == "0")
    {
        currentlyDisplayed = num;
    }
    else
    {
        currentlyDisplayed += num;
    }
    updateDisplay();
}

const numberKeys = document.querySelectorAll(".number-button");
numberKeys.forEach(key => key.addEventListener("click", () => {
    changeDisplayed(key.innerHTML);
}));

const signKey = document.querySelector(".sign-button");
signKey.addEventListener("click", () => {
    if (currentlyDisplayed.charAt(0) == "-")
    {
        currentlyDisplayed = currentlyDisplayed.slice(1);
    }
    else
    {
        currentlyDisplayed = "-" + currentlyDisplayed;
    }
    updateDisplay();
});

const clearKey = document.querySelector(".clear-button");
clearKey.addEventListener("click", () => {
    currentlyDisplayed = "0";
    operand = "";
    updateDisplay();
});

const operationKeys = document.querySelectorAll(".operator-button");
operationKeys.forEach(key => key.addEventListener("click", () => {
    currentOperation = key.dataset.operation;

    operand = "0";
    const temp = currentlyDisplayed;
    currentlyDisplayed = operand;
    operand = temp;

    isDecimal = false;
}));

const equalsKey = document.querySelector(".equals-button");
equalsKey.addEventListener("click", () => {
    currentlyDisplayed = operate(window[currentOperation], parseFloat(operand), parseFloat(currentlyDisplayed));
    operand = "";
    currentOperation = undefined;
    updateDisplay();
});

const decimalPointKey = document.querySelector(".decimal-button");
decimalPointKey.addEventListener("click", () => {
    if (!isDecimal)
    {
        currentlyDisplayed = currentlyDisplayed + ".";
        isDecimal = true;
        updateDisplay();
    }
});