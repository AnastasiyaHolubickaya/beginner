let names = ['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга',];

const filterNames = (mass) => {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    let resultMass = [];
    mass.filter((r) => unwantedNames.indexOf(r) < 0 && resultMass.push(r));
    return resultMass;
};


console.log(filterNames(names));