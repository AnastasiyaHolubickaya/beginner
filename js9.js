const multiply = (mass) => {
    let res = 1;
    mass.map(m => res *= m);
    return res;
};
let array = [1,2,3,4];
console.log(multiply(array));