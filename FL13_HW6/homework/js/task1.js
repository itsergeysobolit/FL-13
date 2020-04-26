let amount = prompt('Enter an amount of money');
const MAX = 100;
if (amount <= 0 || isNaN(amount)) {
    alert('Invalid input data');
} else {
    let percent = prompt('Enter percent');
    if (percent <= 0 || isNaN(percent) || percent > MAX) {
        alert('Invalid input data');
    } else {
        let tip = amount * percent / MAX;
        alert(`Check number: ${amount}
        Tip: ${percent}%
        Tip amount: ${tip}
        Total sum to pay: ${Math.floor((+amount + +tip) * MAX) / MAX}`)
    }
}