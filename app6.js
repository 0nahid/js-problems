// vowel find using switch case

var str = "Hello World";
var count = 0;
for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            count++;
            break;
    }
}
// console.log(count);

// find the repeated number in an array using for loop

// var numbers = [10];
// var repeated = [];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     for (var j = i + 1; j < numbers.length; j++) {
//         var number2 = numbers[j];
//         if (number === number2) {
//             repeated.push(number);
//         }
//     }
// }

// console.log(repeated);

// most repeated string in an array
var array = ["A", "A", "A", "B"];
var mostRepeated = "";
var count = 0;
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var currentCount = 0;
    for (var j = 0; j < array.length; j++) {
        var element2 = array[j];
        if (element === element2) {
            currentCount++;
        }
    }
    if (currentCount > count) {
        count = currentCount;
        mostRepeated = element;
    }
}

// console.log(mostRepeated);

// var array2 = ["A", "A", "A", "B"];
// let unique = [...new Set(array2)];
// console.log(unique);

// leap year with for of loop from an array

var years = [2500, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function findLeapYear(years) {
    for (var year of years) {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            console.log(year + " is a leap year");
        }

    }
}

// findLeapYear(years);

function tollestNumber(number){
    let tollest = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if(element > tollest){
            tollest = element;
        }
    }
    return tollest;
}
let numbers = [56,87,90,102,105,12,45,50,47,500];
let result = tollestNumber(numbers);
// console.log(result);

// length & width of a ractagular
function areaOfRactangle(length,width){
    let area = length * width;
    return area;
}
// console.log(areaOfRactangle(10,20));

var input =[
    {name: "A", age: 20},
    {name: "B", age: 11},
    {name: "C", age: 22},
]

// output smallest person with age
function smallestPerson(input){
    let smallest = input[0];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element.age < smallest.age){
            smallest = element;
        }
    }
    return smallest;
}
console.log(smallestPerson(input));