// all variable
var value = []; //keep the numbers
var operator = NaN; //keep the operators
var bool = false;

function getTouch(e) {

    // Setup of animation of bar
    document.querySelector('.animationBar').style.animationName = 'animationBarStopped';
    document.querySelector('.animationBar').style.opacity = '0';

    // Animation 'on click' on touch
    let className = e;
    className.classList.add('blockAnimation');

    // info of the touch press
    let infoTouch = e.getAttribute('value');
    if (infoTouch === '+' || infoTouch === '-' || infoTouch === '/' || infoTouch === '*') {

        bool = true;
        // Setup of operators
        if (infoTouch === '+') {
            operator = 0;
        }
        if (infoTouch === '-') {
            operator = 1;
        }
        if (infoTouch === '*') {
            operator = 2;
        }
        if (infoTouch === '/') {
            operator = 3;
        }

    } else {
        // Set the display of calculator
        document.querySelector('.display').innerHTML += infoTouch;
    }
    if (bool === true || value.length > 2) {
        let i = document.querySelector('.display').innerHTML;
        // Set value with variable i
        value.push(parseFloat(i));
        document.querySelector('.display').innerHTML = '';
        bool = false;
    }
    if (infoTouch === '=') {
        // If touch press = equal, set display of calculator with the result
        let i = document.querySelector('.display').innerHTML;
        value.push(parseFloat(i));
        document.querySelector('.display').innerHTML = '';
        add(); // Function
    }
    if (infoTouch === 'C') {
        // If touch press = C, set display of calculator and reset all variables
        value = [];
        operator = NaN;
        document.querySelector('.display').innerHTML = '';
        document.querySelector('.animationBar').style.animationName = 'animationBar';
    }
    if (value.length >= 2) {
        add();
    }

    // Remove animation 'on click' on touch
    setTimeout(() => {
        className.classList.remove('blockAnimation');
    }, 300);

}

function add() {

    let number1 = value[0];
    let number2 = value[1];

    // if +
    if (operator === 0) {
        document.querySelector('.display').innerHTML = number1 + number2;
    }
    // if -
    if (operator === 1) {
        document.querySelector('.display').innerHTML = number1 - number2;
    }
    // if *
    if (operator === 2) {
        document.querySelector('.display').innerHTML = Math.round(number1 * number2 * 1000 ) / 1000;
    }
    // if /
    if (operator === 3) {
        document.querySelector('.display').innerHTML = Math.round(number1 / number2 * 1000 ) / 1000;
    }

}
