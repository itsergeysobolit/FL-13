function isBigger(a, b) {
    return a > b;
}

function getDifference(a, b) {
    let result = a - b;
    return isBigger(a, b) ? result : -result;
}

getDifference(5, 3);