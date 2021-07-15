const remove = (str, n) => {
    for (let i = 0; i < n; i++) {
        str = str.replace(/[^a-zа-яё\s]/, "");
    }
    return str;
};
console.log(remove("!!!g!!!gg!!!!", 5));

