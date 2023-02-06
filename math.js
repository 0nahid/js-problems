const func = x => 3 * x ** 3 - 6 * x ** 2 + 2; // x^3 - 6x + 4

const deriv = x => 3 * x ** 2 - 6;

let x0 = 1;
let epsilon = 0.0001;

const newtonRaphson = (func, deriv, x0, epsilon) => {
    let x_current = x0;
    while (true) {
        let x_next = x_current - func(x_current) / deriv(x_current);
        if (Math.abs(x_next - x_current) < epsilon) {
            return x_next;
        }
        x_current = x_next;
    }
}

let root = newtonRaphson(func, deriv, x0, epsilon);
console.log("The root of the equation is approximately:", root.toFixed(5));


let a = 0;
let b = 2;

function bisection(func, a, b, epsilon) {
    let c = (a + b) / 2;
    while (Math.abs(func(c)) > epsilon) {
        if (func(c) * func(a) < 0) {
            b = c;
        } else {
            a = c;
        }
        c = (a + b) / 2;
    }
    return c;
}

let root2 = bisection(func, a, b, epsilon);
console.log("The root of the equation is approximately:", root2.toFixed(4));
