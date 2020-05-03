function letterCount(str, char) {
    let result = 0;
    for (let letter of str) {
        if (letter === char) {
            result++;
        }
    }
    return result;
}

letterCount("Marry", "r");