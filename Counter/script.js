//Initializing the count
let count = 0;


const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');


function reset() {
    count = 0;
    value.textContent = count;
    value.style.color = 'black';
}

function decrease() {
    count--;
    value.textContent = count;
    value.style.color = 'red';
}


function increase() {
    count++;
    value.textContent = count;
    value.style.color = 'green';
}