function ticketPrice(ticketNumber) {
    const ticket_1 = 100;
    const ticket_2 = 90;
    const ticket_3 = 70;
    if (ticketNumber <= 100) {
        return ticket_1 * ticketNumber;
    }
    else if (ticketNumber <= 200) {
        const ticket_1_price = ticket_1 * 100;
        return ticket_1_price + (ticketNumber - 100) * ticket_2;
    }
    else {
        const ticket_1_price = ticket_1 * 100;
        const ticket_2_price = ticket_2 * 100;
        return ticket_3 * (ticketNumber - 200) + ticket_1_price + ticket_2_price;
    }
}

// console.log(ticketPrice(201));

// push the numbers in an array which are greater than 80 with loop

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 123, 12323, 43, 54, 5556, 45];
const greaterThan80 = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 80) {
        greaterThan80.push(number);
    }
}

// console.log(greaterThan80);

// findin the largest string in an array 
function largestString(strings) {
    let largest = strings[0];
    for (let i = 0; i < strings.length; i++) {
        const string = strings[i];
        if (string.length < largest.length) {
            largest = string;
        }
    }
    return largest;
}

// console.log(largestString(['salam', 'hello', 'hi', 'how are you']));


