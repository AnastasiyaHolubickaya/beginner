const math = (one, two) => {
    if (one > two) {
        return one + two;
    } else if (two > one) {
        return one * two;
    } else {
        return "Числа одинаковые";
    }
};
document.querySelector(".block_js5").addEventListener("click", function () {
    let oneNumber = parseInt(prompt("введите первое число"), 10);
    let twoNumber = parseInt(prompt('введите второе число'), 10);
    alert(`${math(oneNumber, twoNumber)}`);
});
