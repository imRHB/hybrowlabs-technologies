// const name = 'Chinmay Kulkarni';
const name = 'Amolya Sharma';

const count = {};

/* function for converting the string to uppercase and split by (' ') and saved in an array */
const strToArr = (name) => {
    const strArr = name.toUpperCase().split(' ');
    return strArr;
};

/* function for checking the character count and saved to count object */
const charCounter = (strArr) => {
    strArr.forEach(char => {
        char.split('').forEach(c => count[c] = (count[c] || 0) + 1);
    });

    /* console from the object with key and value */
    for (let c in count) {
        console.log(c + '-' + count[c]);
    };
};

/* function calling and passing the the another function as parameter */
charCounter(strToArr(name));