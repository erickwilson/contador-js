var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const element = document.getElementById("increment");
element.addEventListener("click", increment);

const element2 = document.getElementById("decrement");
element2.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    } else {
        currentNumberWrapper.style.color = 'red';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }

}