/* Get DOM Elements */
//shells
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

//buttons
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');

//spans
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;

/* State */

//set state to ball hidden

function resetStyles() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell2.classList.remove('reveal');
}

function updateView() {
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
}

/* Events */

button1.addEventListener('click', () => {
    resetStyles();

    const randomShell = Math.ceil(Math.random() * 3);

    if (randomShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else if (randomShell === 3) {
        shell3.classList.add('reveal');
        losses++;
    }

    updateView();
});

button2.addEventListener('click', () => {
    resetStyles();

    const randomShell = Math.ceil(Math.random() * 3);

    if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else if (randomShell === 3) {
        shell3.classList.add('reveal');
        losses++;
    }
    updateView();
});

button3.addEventListener('click', () => {
    resetStyles();

    const randomShell = Math.ceil(Math.random() * 3);

    if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else if (randomShell === 3) {
        shell3.classList.add('reveal');
        wins++;
    }
    updateView();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
