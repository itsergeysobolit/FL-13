function isBigger(a, b) {
    return a > b;
}

function countPoints(arr) {
    let result = 0;
    for (let match of arr) {
        match = match.split(':');
        if (match[0] === match[1]) {
            result++;
        } else {
            isBigger(...match) ? result += 3 : result += 0;
        }
    }
    return result;
}

console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));