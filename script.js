const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('display');
const clearButton = document.querySelector('.clearButton');
let temp = 0; 
const convertButton = document.querySelector('.convertToButton');
let flag = true;

buttons.forEach(button => {
    button.addEventListener('click' , () =>
    {
    temp = display.value += button.textContent;
});
});

convertButton.addEventListener('click' , () =>
{
    display.value = convertTemp(temp);   
})


clearButton.addEventListener('click' , () =>
{
    display.value = '';
})

function convertToFarhenheit(temp1)
{
    return temp1 * 1.8 + 32;
}

function convertToCelsius(temp1)
{
    return temp1 - 32 / 1.8;
}