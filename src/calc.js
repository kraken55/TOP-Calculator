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