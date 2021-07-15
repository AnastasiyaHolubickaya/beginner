const maxDiff = (arrayNum) => {
    if (arrayNum.length <= 1) {
        return 0
    } else {
        return Math.max(...arrayNum) - Math.min(...arrayNum)
    }
};
console.log(maxDiff([1]));