function assign(target, ...src) {
    for (let obj of src) {
        for (let prop in obj) {
            if ({}.hasOwnProperty.call(obj, prop)) {
                target[prop] = obj[prop];
            }
        }
    }
    return target;
}
const paymentCard = { cash: '100$' };
const creditCard = { creditLimit: '50$', cash: '200$' };
const universalCard = assign({}, creditCard, paymentCard);
console.log(universalCard);