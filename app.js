var daily_work = ['unlock_module', 'watch_video', 'take_notes', 'practice_module', 'if_donot_understand'];


//  for loop with reverse & no undefined
// for (var i = daily_work.length - 1; i >= 0; i--) {
//     console.log(daily_work[i]);
// }



//  while loop with reverse & no undefined
// var i = daily_work.length - 1;
// while (i >= 0) {
//     console.log(daily_work[i]);
//     i--;
// }

//  do while loop with reverse & no undefined
// var i = daily_work.length - 1;
// do {
//     console.log(daily_work[i]);
//     i--;
// }
// while (i >= 0);

//  for loop with reverse & no undefined
// for (var i = daily_work.length - 1; i >= 0; i--) {
//     console.log(daily_work[i]);
// }

// for of loop with reverse & no undefined
// for (var i of daily_work.reverse()) console.log(i);

// map with reverse & no undefined
// daily_work.map((i) => console.log(i)).reverse();

// forEach with reverse & no undefined
// var i = daily_work.length - 1;
// daily_work.forEach(() => console.log(daily_work[i--]));

// for in loop with reverse & no undefined
// for (var i in daily_work.reverse()) console.log(daily_work[i]);



const array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// output with for loop
// for (var i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// }

// while loop
// var i = 0;
// while (i < array1.length) {
//     console.log(array1[i]);
//     i++;
// }

// stop the loop when found the word "take_notes"

// for loop
// for (var i = 0; i < array1.length; i++) {
//     if (array1[i] == "z") {
//         console.log(`Found the word ${array1[i]} at index ${i}`);
//         break;
//     }
// }

// var porashuna = true;
// var salary = 100;

// if (porashuna == true && salary > 600)
// {
//     console.log("I will marry you");
// }
// else if (porashuna == true && salary < 600)
// {
//     console.log("I will not marry you");
// }

var phone = ["samsung", "nokia", "iphone", "oppo", "vivo", "realme", "xiaomi", "oneplus", "huawei", "lg", "sony", "motorola", "lenovo", "asus", "blackberry", "htc", "tecno", "infinix", "gionee", "nubia", "meizu", "coolpad", "micromax", "lava", "intex", "karbonn", "panasonic", "alcatel", "vodafone", "gigabyte", "blu", "leeco", "oneplus", "asus", "nokia", "samsung", "oppo", "vivo", "realme", "xiaomi", "oneplus", "huawei", "lg", "sony", "motorola", "lenovo", "asus", "blackberry", "htc", "tecno", "infinix", "gionee", "nubia", "meizu", "coolpad", "micromax", "lava", "intex", "karbonn", "panasonic", "alcatel", "vodafone", "gigabyte", "blu", "leeco", "oneplus", "asus", "nokia", "samsung", "oppo", "vivo", "realme", "xiaomi", "oneplus", "huawei", "lg", "sony", "motorola", "lenovo", "asus", "blackberry", "htc", "tecno", "infinix", "gionee", "nubia", "meizu", "coolpad", "micromax", "lava", "intex", "karbonn", "panasonic", "alcatel", "vodafone", "gigabyte", "blu", "leeco", "oneplus", "asus", "nokia", "samsung", "oppo", "vivo", "realme", "xiaomi", "oneplus", "huawei", "lg", "sony", "motorola", "lenovo", "asus", "blackberry", "htc", "tecno", "infinix", "gionee", "nubia", "meizu"]

// while loop for print all phone name
// var i = 0;
// while (i < phone.length) {
//     console.log(phone[i]);
//     i++;
// }

// let array2 = ['a', 'b', 'c'];
// array2.push('d');
// console.log(array2);
// array2[1] = 'new';
// console.log(array2);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// let array2 = ['a', 'b', 'c'];
// search the index of the word "d" in array2 and replace it with "not found"
// var i = 0;
// while (i < array2.length) {
//     if (array2[i] == "d") {
//         array2[i] = "not found";
//         console.log(array2);
//         break;
//     }
//     i++;
// }

let array2 = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7];

// finding the duplicate number in array & remove it
// var i = 0;
// while (i < array2.length) {
//     if (array2[i] == array2[i + 1]) {
//         array2.splice(i, 1);
//         console.log(array2);
//     }
//     i++;
// }



// let array = [4, 2, 1, 8, 5, 7, 89, 9]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);
// console.log(array.sort((a, b) => a - b));

// array.sort((a, b) => a - b);
// console.log(array);

let array = [4, 2, 1, 8, 5, 7, 89, 9, 90]
// biggest number in array with for loop
var biggest = array[0];
let bigNum = [];
// push the biggest number in array to bigNum array with for loop & print only one biggest number
for (let i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
        biggest = array[i];
        // console.log(bigNum);
        bigNum.push(biggest);
    }
}
console.log(`bigNum` + bigNum);


// sort the array in ascending order with for loop
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
// console.log(array);

// callback function
// function myFunc(callback) {
//     callback();
// }

// myFunc(function () {
//     console.log("Hi I'm callback function");
// });