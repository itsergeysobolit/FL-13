let user = {
    login: 'User',
    password: 'UserPass'
}

let admin = {
    login: 'Admin',
    password: 'RootPass'
}

let current = {},
    lengthPass = 4,
    minHours = 8,
    maxHours = 20;

let login = prompt(`Please, enter your login`);
if (login === admin.login) {
    current = admin;
} else if (login === user.login) {
    current = user
}

if (!login) {
    alert(`Canceled`);
} else if (login.length < lengthPass) {
    alert(`I don't know any users having name lenght less than 4 symbols`);
} else if (current.login) {
    let password = prompt(`Please, enter your password`);
    if (!password) {
        alert(`Canceled`);
    } else if (password === current.password) {
        let hours = new Date().getHours();
        if (hours <= maxHours && hours >= minHours) {
            alert(`Good day, dear ${current.login}!`);
        } else {
            alert(`Good evening, dear ${current.login}!`);
        }
    } else {
        alert(`Wrong password`)
    }
} else {
    alert(`I don't know you`)
}