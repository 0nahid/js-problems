let arr = [45, 99, 98, 1, 3, 95]
let bigest = arr[0];
// sort the array in descending order with for loop
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
// console.log(arr);

//  make it with function
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([45, 99, 98, 1, 3, 95]));

// Write foo, bar, foobar if divisible by 3 or 5 or both , number params

// function fooBar(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('foobar');
//         } else if (i % 3 === 0) {
//             console.log('foo');
//         } else if (i % 5 === 0) {
//             console.log('bar');
//         } else {
//             console.log(i);
//         }
//     }
// }

// fooBar(15);
// Write foo, bar, foobar if divisible by 3 or 5 or both , number params with function & output with return value one by one

function fooBar(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('foobar');
        } else if (i % 3 === 0) {
            arr.push('foo');
        } else if (i % 5 === 0) {
            arr.push('bar');
        } else {
            arr.push(i);
        }
    }
    return arr;
}

// console.log(fooBar(15));

let chars = ['A', 'B', 'C', 'C', 'A'];

let unickChar = [...new Set(chars)];
// console.log(unickChar);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [...arr1];

// console.log(`arr1 = ${arr1}`);

// arr2[0] = 100;

// console.log(`arr2 = ${arr2}`);

// 21,23,45,12,23
// 23,21,45,12,23
// 23,45,21,12,23
// 21,24,21,23,12
// 24,31,23,21,12
// 31,24,23,21,12
