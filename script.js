// write your JS code here
let price = 5.99;
count = 0;
let area = document.querySelector(`#dis`);

function onloadFunc() {
    document.querySelector(`#amount`).innerHTML = `0.00`
    document.querySelector(`#dis`).value = count;
};

function plus() {
    count++;
    document.querySelector(`#dis`).value = count;
    let sum = price * count;
    document.querySelector(`#amount`).innerHTML = sum.toFixed(2);
};

function minus() {
    let area = document.querySelector(`#dis`).value;
    count--;
    if (area == 0) {
        count = 0;
    } else {
        let sum = price * count;
        document.querySelector(`#dis`).value = count;
        document.querySelector(`#amount`).innerHTML = sum.toFixed(2);

    }
};