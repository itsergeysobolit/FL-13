function positiveSum(arr) {
    let result = arr.filter(number => number > 0).reduce((prev, current) => current + prev, 0);
    return result;
}

positiveSum([-10, 3, 5, -7]);