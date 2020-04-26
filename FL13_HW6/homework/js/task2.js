let str = prompt('Enter string', '');
const ODD = 2;
str = str.replace(/\s+/g, '');
console.log('ytct', str);
if (str === '') {
    alert('Invalid input data')
} else if (str.length % ODD === 0) {
    alert(`${str.substr(str.length / ODD - 1, ODD)}`);
} else {
    alert(`${str.substr(Math.floor(str.length / ODD), 1)}`)
}
