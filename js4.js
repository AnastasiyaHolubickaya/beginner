let usersName = ['Саша', 'Петя', 'Оксана'];

//2
let copyUsersName = usersName.map(item => (item === "Петя") ? item = "Олег" : item).reverse();
console.log(copyUsersName);

//1
usersName[1] = 'Олег';
usersName.reverse();
console.log(usersName);