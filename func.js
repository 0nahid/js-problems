//  nested function
function foo() {
    console.log('foo');
}
function bar() {
    console.log('bar');
}

// write a function that called foo and bar in sequence , then call the function in the foo function and call the bar function in the bar function

// function fooBar() {
//     foo();
//     bar();
// }

// write a function called make_avg() that takes an array of int and the size of the array and return the average of those numbers

function make_avg(arr, size) {
    var sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
}
// console.log(make_avg([1, 2, 3, 4, 5], 5));

const colors = ["red", "green", "blue"];

function printColor(color) {
    // console.log(color);
    // for in
    for (let color in colors) {
        console.log(colors[color]);
    }
}
// colors.forEach(printColor);

// printColor(colors);

// takr input from terminal and print it

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name? ", function (name) {
//     console.log("Your name is " + name);
//     rl.close();
// });


// pass 5 variable as params where last three will be set to default value and print them

// function print(a, b, c = c, d = c, e = c) {

//     return a + b + c + d + e;
// }

// print(1, 2, 3);

//  hello function with return type

// function hello(x) {
//     return "Hello " + x;
// }

const x = {
    a: 1,
    b: 2,
}
// console.log(hello("q"));
var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// for (let index = 0; index < keys.length; index++) {
//     const element = keys[index]
//     const singleText = values[index];
//     // console.log(element);
//     // console.log(singleText);
//     console.log("keys " + element + " values " + singleText);
// }

// for in loop
// var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// for (let index in keys) {
//     const element = keys[index];
//     const singleText = values[index];
//     console.log("keys " + element + " values " + singleText);
// }

// oddEven function with return type and params

function oddEven(x) {
    if (x % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(oddEven(2));
// https://www.facebook.com/recover/password/?u=100009564462465&n=96708618&fl=default_recover&sih=0&msgr=0


// jakat 2.5% reduce 

function jakat(x) {
    return x - (x * 0.025);
}

// console.log(jakat(5000));

// interest calculation with year and amount

// multiplication table with params

function multiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        // console.log(x + " * " + i + " = " + x * i);
        console.log(`${x} * ${i} = ${x * i}`);
        // console.log(i);
    }
}

multiplicationTable(13);

// uppercase & regular case text to lowercase

function lowerCase(x) {
    return x.toLowerCase();
}
// console.log(lowerCase("Hello World"));

// Detect vowel and consonent

// const solution = (letter) => {
//     //Write Your solution Here
//     if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//         return "Vowel";
//     }
//     return "Consonant";
// };

// leap year or not from an array of year & for loop



function leapYear(years) {
    for (let i = 0; i < years.length; i++) {
        const element = years[i];
        if (element % 4 == 0) {
            console.log(element + " is leap year");
        } else {
            console.log(element + " is not leap year");
        }
    }
}
const years = ["2003", "2004", "2005"];
// leapYear(years);

// time convertion hour to minute and second

function timeConvertion(x) {
    var hour = x * 60;
    var second = hour * 60;
    return `${hour} minute and ${second} second`
}

// console.log(timeConvertion(2));

const arrayofObject = [
    {
        name: "Rahim",
        age: 20,
    },
    {
        name: "Karim",
        age: 25,
    },
    {
        name: "Karim",
        age: 25,
    },
    {
        name: "Karim",
        age: 25,
    },
    {
        name: "Karim",
        age: 25,
    },
    {
        name: "Karim",
        age: 25,
    },
    {
        name: "Karim",
        age: 25,
    }
]

// function of total age of array of object

function totalAge(x) {
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        sum += element.age;
    }
    return sum;
}

// console.log(totalAge(arrayofObject));

// reverse a string with for loop

function reverseString(x) {
    var reverse = "";
    for (let i = x.length - 1; i >= 0; i--) {
        const element = x[i];
        reverse += element;
    }
    return reverse;
}
// console.log(reverseString("Hello World !"));

// reverse a string with while loop

// function reverseString(x) {
//     var reverse = "";
//     var i = x.length - 1;
//     while (i >= 0) {
//         const element = x[i];
//         reverse += element;
//         i--;
//     }
//     return reverse;
// }

// find the smallest number from an array

function smallestNumber(x) {
    var smallest = x[0];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

// console.log(smallestNumber([1,0.5,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// remove duplicate from an array

function removeDuplicate(x) {
    var unique = [];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
            // sort unique array
            unique.sort(function (a, b) { return a - b });
        }
    }
    return unique;
}

// console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 101, 01, 101, 101, 0]));

// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

function count_zero(x) {
    var count = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element == 0) {
            count++;
        }
    }
    return count;
}

// console.log(count_zero("1010101"));



// sum from array 

function sum(x) {
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        sum += element;
    }
    return sum;
}

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// sum of odd number from an array

function sumOdd(x) {
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element % 2 != 0) {
            sum += element;
        }
    }
    return sum;
}

// console.log(sumOdd([10,11,12,13]));

// get odd number from an array
/**
 * 
 * odd number[]
 * Odd numbers example [1,3,5,7,9]
 * number % 2 != 0
 * odd number @ push oddNumber[]
 * return oddNumber[]
 */
function getOddNumber(x) {
    var oddNumber = [];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element % 2 != 0) {
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
// console.log(getOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// get the large number from an array

function largeNumber(x) {
    var large = x[0];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element > large) {
            large = element;
        }
    }
    return large;
}

// console.log(largeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));