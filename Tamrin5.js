let users = {
    ali: {
        name: "Ali",
        balance: 250000,
        isActive: true
    },
    sara: {
        name: "Sara",
        balance: 80000,
        isActive: true
    },
    reza: {
        name: "Reza",
        balance: 150000,
        isActive: false
    },
    mina: {
        name: "Mina",
        balance: 400000,
        isActive: true
    }
};

for (let user in users) {

    if (users[user].isActive === true) {

        users[user].balance += 100000;

        console.log(user + ": Etebar Hediyeh Daryaft Kard");

    }
    else {

        console.log(user + ": Etebar Hediyeh Daryaft Nakard");

    }

}