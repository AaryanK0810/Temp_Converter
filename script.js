const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('display');
const clearButton = document.querySelector('.clearButton');
const convertButton = document.querySelector('.convertToButton');

let flag = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

       
        if (value === '.' && display.value.includes('.')) {
            return;
        }

        display.value += value;
    });
});

convertButton.addEventListener('click', () => {
    const temp = parseFloat(display.value);

    if (isNaN(temp)) {
        display.value = 'Please enter a value';
        return;
    }

    if (flag) {
        display.value = convertToFahrenheit(temp).toFixed(2);
        flag = false;
    } else {
        display.value = convertToCelsius(temp).toFixed(2);
        flag = true;
    }
});

clearButton.addEventListener('click', () => {
    display.value = '';
    flag = true;
});

function convertToFahrenheit(temp1) {
    return temp1 * 1.8 + 32;
}

function convertToCelsius(temp1) {
    return (temp1 - 32) / 1.8;
}