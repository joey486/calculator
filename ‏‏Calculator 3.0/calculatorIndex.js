// Get the display element from the HTML document
const display = document.getElementById("display");

var hiddenDisplay = "";

var ans = "";

/**
 * Function to append input to the display.
 * @param {string} input - The input to be appended to the display.
 */

function appendToDisplay(input) {
    hiddenDisplay += input;

    switch (input) {      
        case '/': display.value += '÷'; break;
        case '*': display.value += '×'; break;
        case '**': display.value += '^'; break;
        case 'Math.sin(': display.value += 'sin('; break;
        case 'Math.cos(': display.value += 'cos('; break;
        case 'Math.tan(': display.value += 'tan('; break;
        case 'Math.E': display.value += 'e'; break;
        case 'Math.PI': display.value += 'π'; break;
        case 'Math.log(': display.value += 'ln('; break;  
        case '* Math.PI/180': display.value += '°'; break;    
        case 'Math.sqrt(': display.value += '√('; break;
        case 'Math.log10(': display.value += 'log('; break;
        case 'Math.abs(': display.value += 'abs('; break;
        case '!': display.value += '!';hiddenDisplay = hiddenDisplay.replace('!','');hiddenDisplay = factorialize(hiddenDisplay); break;
        case '%': display.value += '%'; hiddenDisplay = hiddenDisplay.replace('%','* 0.01');break;
        default : {display.value += input; break;} 
    }
}

function showAnswer(){
    debugger;
    display.value = "ans";
    hiddenDisplay = ans;
}

/**
 * Function to clear the display.
 */
function clearDisplay() {
    display.value = "";
    hiddenDisplay= "";
}

/**
 * Asynchronous function to perform calculation based on the input in the display.
 */
async function calculate() {
    
    if( display.value.includes("Math.tan(90°)") ||
        display.value.includes("√(-") ||
        display.value.includes("÷0") ||
        display.value.includes("0^0") ||
        display.value.includes("log(0") ||
        display.value.includes("log(-") ||
        display.value.includes("ln(-") ||
        display.value.includes("ln(0)") 
    ){
        display.value = "Math Error"
        await delay(1000);
        clearDisplay(); 
    } 

    else try {
        // Evaluate the expression in the display and update the display with the result
        display.value = eval(hiddenDisplay);   
        hiddenDisplay = eval(hiddenDisplay);  
        ans = display.value;
    } catch (error) {
        // Display "Syntax Error" if evaluation fails and clear the display after 1 second
        display.value = "Syntax ERROR";
        await delay(1000);
        clearDisplay();
    }    
}

/**
 * Asynchronous function to introduce a delay.
 * @param {number} delayInms - The delay time in milliseconds.
 */
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

/**
 * Function to simulate backspace functionality by removing the last character from the display.
 */
function backspace() {
    // Get the current value from the display
    let currentValue = display.value;
    let currentHiddenDisplay = hiddenDisplay;
    
    // Check if the display is not empty
    if (currentValue.length > 0) {
        // Remove the last character from the display
        display.value = currentValue.slice(0, -1);
        hiddenDisplay = currentHiddenDisplay.slice(0, -1);
    }
}

//Cursor code:
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 250, fill: "forwards"});
});

//factorial code:
function factorialize(display){
  
    var num = "";
    var result = "";

    for(i = display.length -1 ; isANumber(display[i]); i--){
        num += display.charAt(i);
    }

    debugger;

    result = factorializeNum(num).toString();

    return hiddenDisplay.replace(num, result);
}

function factorializeNum(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}

function isANumber(num){
    if(num >= 0 && num <= 9){
        return true;
    }
    else{
        return false;
    }
}