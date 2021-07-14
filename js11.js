let massA = [3, 2, 5];
let massB = [1, 4, 4];

const getResidualArraysNumbers = (arr1, arr2) => {
    return (Math.abs(arr1.reduce((accumulator, currentValue) => accumulator * currentValue) - arr2.reduce((accumulator, currentValue) => accumulator * currentValue)));
};

console.log(getResidualArraysNumbers(massA, massB));