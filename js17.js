const divisibleByThree = (str) => {
   return Number.isInteger([...str].reduce((accumulator, currentValue) => accumulator + currentValue) / 3)? "true" : "false" ;
    /*
    let res=0;
    for (let c of str) {
            res += Number(c);
    }
    return Number.isInteger(res/3) ? "true" : "false"
*/
};

console.log(divisibleByThree("19254"));