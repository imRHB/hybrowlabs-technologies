const name = 'Amolya Sharma';
// const joined = (name.split(' ').join());

const count = {};

/* for (let i = 0; i < joined.length; i++) {
    console.log(joined[i]);

    joined[i] ? count[i]++ : count[i] = 1;
} */

/* joined.forEach(char => {
    char.split('').forEach(c => count[c] = (count[c] || 0) + 1)
}); */


const strToArr = name => {
    const strArr = name.toUpperCase().split(' ');
    return strArr;
};

const charCounter = (strArr) => {
    strArr.forEach(char => {
        char.split('').forEach(c => count[c] = (count[c] || 0) + 1);
        console.log(count);
    });

    console.log(count);
};

charCounter(strToArr(name));