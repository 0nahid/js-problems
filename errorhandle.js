// check this is array or not
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
console.log(isArray([1, 2, 3])); // true
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

// check this ia Array or not with instanceof
function isArray(obj) {
    return obj instanceof Array;
}
// console.log(isArray([1, 2, 3])); // true

// check the function's parameter is array or not
function checkArray(arr) {
    if (!Array.isArray(arr)) {
        console.log('not array');
    }
}
checkArray(1); // not array