const between = (a, b) => {
    let arrayNum=[];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arrayNum.push(i)
        }
        return arrayNum;
    }
};

console.log(between(20, 25));