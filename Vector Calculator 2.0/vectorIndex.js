
let is3D = true;

function toggleDimension() {
    is3D = !is3D;
    document.getElementById('vector1z').style.display = is3D ? 'block' : 'none';
    document.getElementById('vector1zLabel').style.display = is3D ? 'block' : 'none';
    document.getElementById('vector2z').style.display = is3D ? 'block' : 'none';
    document.getElementById('vector2zLabel').style.display = is3D ? 'block' : 'none';
}

function calculate(operation) {
    let vector1x = parseFloat(document.getElementById('vector1x').value);
    let vector1y = parseFloat(document.getElementById('vector1y').value);
    let vector2x = parseFloat(document.getElementById('vector2x').value);
    let vector2y = parseFloat(document.getElementById('vector2y').value);

    let vector1z = 0;
    let vector2z = 0;

    if (is3D) {
        vector1z = parseFloat(document.getElementById('vector1z').value);
        vector2z = parseFloat(document.getElementById('vector2z').value);
    }

    let result;
    switch (operation) {
        case 'sum':
            // Code for sum calculation
            break;
        case 'subtract':
            // Code for subtraction calculation
            break;
        case 'dot':
            // Code for dot product calculation
            break;
        case 'cross':
            // Code for cross product calculation
            break;
        case 'angle':
            let dotProduct = (vector1x * vector2x) + (vector1y * vector2y) + (vector1z * vector2z);
            let magnitude1 = Math.sqrt((vector1x ** 2) + (vector1y ** 2) + (vector1z ** 2));
            let magnitude2 = Math.sqrt((vector2x ** 2) + (vector2y ** 2) + (vector2z ** 2));
            let angleInRadians = Math.acos(dotProduct / (magnitude1 * magnitude2));
            let angleInDegrees = (angleInRadians * 180) / Math.PI;
            result = `Angle between vectors: ${angleInDegrees.toFixed(2)} degrees`;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').textContent = result;
}

function clearInputs() {
    document.getElementById('vector1x').value = '';
    document.getElementById('vector1y').value = '';
    document.getElementById('vector1z').value = '';
    document.getElementById('vector2x').value = '';
    document.getElementById('vector2y').value = '';
    document.getElementById('vector2z').value = '';
    document.getElementById('result').textContent = '';
    // Optionally, clear the canvas as well
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


//----------------------------------------------------------------
// draw the vectors
//----------------------------------------------------------------

let canvas = document.getElementById('vectorCanvas');
let ctx = canvas.getContext('2d');

function drawVector(x, y, color) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
}

function calculateAndDrawVectors() {
    let vector1x = parseFloat(document.getElementById('vector1x').value);
    let vector1y = parseFloat(document.getElementById('vector1y').value);
    let vector2x = parseFloat(document.getElementById('vector2x').value);
    let vector2y = parseFloat(document.getElementById('vector2y').value);

    let vector1z = 0;
    let vector2z = 0;

    if (is3D) {
        vector1z = parseFloat(document.getElementById('vector1z').value);
        vector2z = parseFloat(document.getElementById('vector2z').value);
    }

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw vector 1
    drawVector(vector1x * 10, vector1y * 10, 'red'); // Scale the vectors for visualization

    // Draw vector 2
    drawVector(vector2x * 10, vector2y * 10, 'blue'); // Scale the vectors for visualization
}

// Call calculateAndDrawVectors when the page loads or when the button is clicked
document.addEventListener('DOMContentLoaded', calculateAndDrawVectors);

//----------------------------------------------------------------
//Cursor code:
//----------------------------------------------------------------
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 250, fill: "forwards"});
});
