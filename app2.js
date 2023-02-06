// let array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7];
// var i = 0;
// while (i < array.length) {
//     if (array[i] == array[i + 1]) {
//         array.splice(i, 1);
//         // console.log(array);
//     }
//     i++;
// }

// let num = "01700000000";

// let num1 = num.slice(0, 3);
// console.log(num1);

var nums = [40, 50, 600, 324, 234, 54];
var names = ["a", "b", "c", "d", "e", "f"];
for (var i = 0; i < nums.length; i++) {
    var singleNum = nums[i];
    var singleName = names[i];
    console.log(singleName, singleNum);
}

// A+ = 80-100
// A = 70-79
// A- = 60-69
// B = 50-59
// C = 40-49
// D = 33-39
// F = 0-32

// var marks = 35;
// if (marks >= 80 && marks <= 100) {
//     console.log("A+");
// }
// else if (marks >= 70) {
//     console.log("A");
// }
// else if (marks >= 60 ) {
//     console.log("A-");
// }
// else if (marks >= 50 ) {
//     console.log("B");
// }
// else if (marks >= 40) {
//     console.log("C");
// }
// else if (marks >= 33) {
//     console.log("D");
// }
// else if (marks >= 0) {
//     console.log("F");
// }
// else {
//     console.log("Invalid Marks");
// }
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var i = array.length - 1;
// while (i >= 0) {
//     console.log('number = ' + i);
//     i--;
// }

// console.log(array);

// for (let index = 1; index < 50; index++) {
//     if (index % 2 == 0) {
//         console.log("Even Number = " + index);
//     }
//     else {
//         console.log("Odd Number = " + index);
//     }
// }


// let bookPrice = [186, 234, 343, 110, 345, 111, 112, 56, 45, 62, 33];
// var i = 0;
// // remove the book price which is greater than 500 taka with for loop
// for (let index = 0; index < bookPrice.length; index++) {
//     if (bookPrice[index] <= 200) {
//         bookPrice.splice(index, 1);
//         index--;
//     }
//     // console.log(bookPrice[index]);
// }
// console.log(bookPrice);

// var text = "123456789";

// console.log(text.slice(0, 1));

// color
// var traffic = ["red", "yellow", "green"]
// // if red then stop , if yellow then ready , if green then go
// var i = 0;
// while (i < traffic.length) {
//     if (traffic[i] == "red") {
//         console.log("stop");
//     }
//     else if (traffic[i] == "yellow") {
//         console.log("ready");
//     }
//     else if (traffic[i] == "green") {
//         console.log("go");
//     }
//     i++;
// }