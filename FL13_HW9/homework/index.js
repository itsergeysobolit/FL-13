const numberOne = 1,
    numberTwo = 2,
    numberThree = 3,
    numberFour = 4,
    numberFive = 5,
    numberSeven = 7,
    numberEight = 8,
    number2020 = 2020;

//task 1
function convert() {
    const resultArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            resultArr.push(Number(arguments[i]));
        }
        if (typeof arguments[i] === 'number') {
            resultArr.push(String(arguments[i]));
        }
    }
    return resultArr;
}

convert('1', numberTwo, numberThree, '4');

//task 2
function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

executeforEach([1, numberTwo, numberThree], function (el) {
    console.log(el * numberTwo);
});

//task 3
function mapArray(arr, action) {
    executeforEach(arr, function (el, index, arr) {
        arr[index] = action(+el);
    });

    return arr;
}

mapArray([numberTwo, '5', numberEight], function (el) {
    return el + numberThree;
});

//task 4

function filterArray(arr, action) {
    const filteredArr = [];

    executeforEach(arr, function (el) {
        return action(el) ? filteredArr.push(el) : undefined;
    });

    return filteredArr;
}

filterArray([numberTwo, numberFive, numberEight], function (el) {
    return el % numberTwo === 0;
});

//task 5

const containsValue = function (arr, el) {
    let result = false;
    executeforEach(arr, function (arg) {
        arg === el ? result = true : result;
    })
    return result;
}

containsValue([numberTwo, numberFive, numberEight], numberTwo);

//task 6

function flipOver(str) {
    let resultStr = '';
    str = str ? String(str) : '';

    for (let i = 0; i < str.length; i++) {
        resultStr = str[i] + resultStr;
    }

    return resultStr;
}

flipOver('hey world');

//task 7

function makeListFromRange(range) {
    let resultArr = [];

    if (range) {
        for (let i = parseInt(range[0]); i <= parseInt(range[1]); i++) {
            resultArr.push(i);
        }
    }

    return resultArr;
}

makeListFromRange([numberTwo, numberSeven]);

//task 8

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];

function getArrayOfKeys(data, keyName) {
    const resultArr = [];

    executeforEach(data, function (obj) {
        return obj[keyName] ? resultArr.push(obj[keyName]) : undefined;
    });

    return resultArr;
}

getArrayOfKeys(fruits, 'name');

//task 9

function substitute(arr) {
    const sbmin = 10;
    const sbmax = 20;
    const resultArr = [];

    mapArray(arr, function (el) {
        resultArr.push(el < sbmax && el > sbmin ? '*' : el);
    });

    return resultArr;
}

//task 10

const date = new Date(number2020, 0, numberTwo);
function getPastDay(date, daysAgo) {
    const milliseconds = 86400000;
    const pastDate = new Date(date.getTime() - milliseconds * daysAgo);
    return pastDate.getDate();
}

getPastDay(date, numberOne);

//task 11

function formatDate(date) {
    let HH = date.getHours();
    let mm = date.getMinutes();

    const PAD = 10;
    if (HH < PAD) {
        HH = '0' + HH;
    }
    if (mm < PAD) {
        mm = '0' + mm;
    }

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${HH}:${mm}`;
}

formatDate(new Date('6/15/2019 09:15:00'));