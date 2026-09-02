const buttons = document.querySelectorAll('.buttons');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click' , () =>
    {
    display.value += button.textContent;
})
});