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

let displayValue = 0;

function updateDisplay()
{
    const numericalDisplay = document.querySelector(".current-number-displayed");
    numericalDisplay.innerHTML = displayValue;
}

function changeDisplayValue(num)
{
    displayValue = displayValue * 10 + num;
    updateDisplay();
}

const numberKeys = document.querySelectorAll(".number-button");
numberKeys.forEach(key => key.addEventListener("click", () => {
    changeDisplayValue(parseInt(key.innerHTML));
}));

const signKey = document.querySelector(".sign-button");
signKey.addEventListener("click", () => {
    displayValue *= -1;
    updateDisplay();
})