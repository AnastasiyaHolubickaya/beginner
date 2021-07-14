let block = document.querySelector(".block_js6");
let numbers = [10, 20, 30, 50, 235, 3000, 350];
let n = numbers.map(item => String(item))
    .map(str => (str[0].indexOf(1) === 0 || str[0].indexOf(2) === 0 || str[0].indexOf(5) === 0) ? str : null)
    .filter(e => e !== null).map(item => +item);
block.innerHTML = `${n}`;
