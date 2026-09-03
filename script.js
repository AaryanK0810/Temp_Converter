const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('display');
const clearButton = document.querySelector('.clearButton');
const convertButton = document.querySelector('.convertToButton');
const convertToC = document.querySelector('#convertToC');


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
    const temp = display.value

    if (temp === '' ||isNaN(temp)) {
        display.value = 'Please enter a value';
        return;
    }

    display.value = convertToFahrenheit(temp)
});

convertToC.addEventListener('click', () => {
    const temp = display.value

    if (temp === '' ||isNaN(temp)) {
        display.value = 'Please enter a value';
        return;
    }

    display.value = convertToCelsius(temp);
});





clearButton.addEventListener('click', () => {
    display.value = '';
    location.reload();
});

function convertToFahrenheit(temp1) {
    return temp1 * 1.8 + 32;
}

function convertToCelsius(temp1) {
    return (temp1 - 32) / 1.8;
}