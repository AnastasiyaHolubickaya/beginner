let weight = [1,3,4,5,10];
let recommendation = "";
const f = (w) => {
    if(w < 4){
        recommendation="Пора перекусить";
    }else if(w >=4 && w < 5.5){
        recommendation="Вес в норме";
    }else {
        recommendation="Пора на тренировку";
    }
    return console.log(recommendation);
};
weight.forEach(w => f(w));