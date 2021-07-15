const modifyStrInArray = (str, n) => {
   return  str.split(" ").filter(item => item.length > n);
};
console.log(modifyStrInArray('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 6))