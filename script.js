const clients = [
    {
        firstName: 'Александр',
        lastName: 'Иванчук',
        date: '11-29-1990',
        phone: '8 (929) 988-90-09',
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstName: 'Анатолий',
        lastName: 'Стаценко',
        date: '02-12-1987',
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstName: 'Марина',
        lastName: 'Петрова',
        date: '07-26-1997',
        phone: '8 (899) 546-09-08',
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstName: 'Иван',
        lastName: 'Караванов',
        date: '09-12-1999',
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstName: 'Оксана',
        lastName: 'Абрамова',
        date: '01-24-2002',
        phone: '8 (952) 746-99-22',
        amounts: [342, 766, 362]
    },
]

const newClient = {
    firstName: prompt('Введите имя:'),
    lastName: prompt('Введите фамилию:'),
    date: prompt('Введите дату рождения:'),
    phone: prompt('Введите номер телефона:'),
    amounts: []
}

//console.log(newClient);

while (confirm('Добавить покупку для клиента ' + newClient.firstName + '?')) {
    const amount = +(prompt('Введите сумму покупки: '));
    newClient.amounts.push(amount);
}

console.log(newClient.amounts);

clients.push(newClient)

//console.log(clients);

function fullName(clients) {
    return `${clients.firstName} ${clients.lastName}`;
}

//console.log(fullName(clients[0]));

function getBirthday(dateStr) {
    const options = {month: 'long', day: 'numeric'}
    const birthday = new Date(dateStr.date);
    let res = birthday.toLocaleString('ru-RU', options);
    const today = new Date().toLocaleString('ru-RU', options);
    if (res === today) {
        res += ' (today)'
    }
    return res;
}

console.log(getBirthday(clients[0]));

function getAllAmount(amounts) {
    let total = 0;
    for (let i = 0; i < amounts.length; i++) {
        total += amounts[i];
    }
    return total;
}

//console.log(getAllAmount(clients[0].amounts));

function getAverageAmount(amounts) {
    return +(getAllAmount(amounts) / amounts.length.toFixed(1));
}

//console.log(getAverageAmount(clients[0].amounts));

const showClients = (clients) => {
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        const name = fullName(client);
        const average = getAverageAmount(client.amounts);
        const birthday = getBirthday(client);

        console.log('Клиент ' + name + ' имеет среднюю сумму чека ' + average + '. День рождения клиента: ' + birthday);
    }
};

showClients(clients);

try {
    showClients();
} catch (error) {
    console.log('Вызвана функция без параметров');
    console.log(error.message);
}

const bestClients = [
    {
        firstName: 'Елена',
        lastName: 'Смирнова',
        date: '03-15-1995',
        phone: '8 (916) 123-45-67',
        amounts: [4500, 8200, 3100, 5600]
    },
    {
        firstName: 'Дмитрий',
        lastName: 'Козлов',
        date: '08-22-1988',
        phone: null,
        amounts: [12000, 7500, 9800]
    },
    {
        firstName: 'Ольга',
        lastName: 'Новикова',
        date: '12-05-1992',
        phone: '8 (903) 555-77-88',
        amounts: [2300, 4100, 6700, 2900, 5100]
    }
];

showClients(bestClients);

setTimeout(() => {
    showClients(bestClients);
}, 3000);

function whoSpentMore(clients) {
    let maxAmount = 0;
    let maxClient = null;
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i];
        const total = getAllAmount(client.amounts);
        if (total > maxAmount) {
            maxAmount = total;
            maxClient = client;
        }
    }
    console.log('Больше всех потратил ' + fullName(maxClient) + '. Сумма покупок: ' + maxAmount + '.');
}

whoSpentMore(clients);
whoSpentMore(bestClients);
