var number = 0;
var numberElement = document.querySelector('.number');
var minusButton = document.querySelector('.minus');
var plusButton = document.querySelector('.plus');
var frame = document.querySelector('.frame');

// Define your gradients
var gradients = [
    'linear-gradient(145deg, #5433ff, #20bdff, #a5fecb)',
    'linear-gradient(145deg, #4568dc, #b06ab3)',
    'linear-gradient(145deg, #e8cbc0, #636fa4)',
    'linear-gradient(145deg, #9cecfb, #65c7f7, #0052d4)',
    'linear-gradient(145deg, #3494e6, #ec6ead)'
];

minusButton.addEventListener('click', function() {
    updateNumber(-1);
});

plusButton.addEventListener('click', function() {
    updateNumber(1);
});

function updateNumber(value) {
    var previousNumber = number;
    number += value;
    
    // Determine which gradient to use based on number
    var gradientIndex = Math.abs(number) % gradients.length;
    frame.style.background = gradients[gradientIndex];

    // Remove old numbers
    while (numberElement.firstChild) {
        numberElement.removeChild(numberElement.firstChild);
    }
    
    if (value > 0) { // fadeUp Animation
        numberElement.classList.add('fadeOutUp');
        var newSpan = document.createElement('span');
        newSpan.classList.add('fadeInUp');
        newSpan.textContent = number;
        numberElement.appendChild(newSpan);
    } else { // fadeDown Animation
        numberElement.classList.add('fadeOutDown');
        var newSpan = document.createElement('span');
        newSpan.classList.add('fadeInDown');
        newSpan.textContent = number;
        numberElement.appendChild(newSpan);
    }
    
    // After animation, remove the fade classes
    setTimeout(function() {
        numberElement.classList.remove('fadeOutUp', 'fadeOutDown');
    }, 500); // Adjust timing as needed
}
