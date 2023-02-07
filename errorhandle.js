// check this is array or not
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
// console.log(isArray([1, "0", 3])); // true
// check this is object or not with constructor

function isObject(obj) {
    return obj.constructor === Object;
}
// console.log(isObject({ name: 'John', age: 30 })); // true

// check this is object or not with typeof
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
// console.log(isObject({ name: 'John', age: 30 })); // true


// check the function's parameter is array or not
function checkArray(arr) {
    if (!Array.isArray(arr)) {
        console.log('not array');
    }
}
// checkArray(1); // not array

// check this ia Array or not with instanceof
function isArray(obj) {
    return obj instanceof Array;
}







// console.log(isArray([""])); // true

// if(!Array.isArray(arr)){
//    return false;
// }

// suppose we have 5 by 5 matrix , now how many queens can be placed in this matrix 

// 1 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 1
// 0 1 0 0 0
// 0 0 0 1 0

// matrix input function with parameter as size of matrix & return array of matrix
function matrixInput(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

// make queen function with parameter as matrix & return matrix with queen placed but one queen should not be placed in diagonal, horizontal & vertical , up & down , from left to right & right to left  , if queen is placed in diagonal , horizontal & vertical , up & down , from left to right & right to left then return false

function makeQueen(matrix) {
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = "1";
                for (let k = 0; k < size; k++) {
                    if (matrix[i][k] === 0) {
                        matrix[i][k] = "0";
                    }
                    if (matrix[k][j] === 0) {
                        matrix[k][j] = "0";
                    }
                }
                for (let k = 0; k < size; k++) {
                    for (let l = 0; l < size; l++) {
                        if (k + l === i + j || k - l === i - j) {
                            if (matrix[k][l] === 0) {
                                matrix[k][l] = "0";
                            }
                        }
                    }
                }
            }
        }
    }
    return matrix;
}

var matrix = matrixInput(5);
console.log(makeQueen(matrix));