let multiply = function (x, y) {
  console.log(x * y);
};

console.log('-------currying by bind---------');

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

console.log('-------currying by function closure---------');

let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiplyClosure(2)(4);

console.log('-------currying by function closure---------');

const summed = (a) => (b) => (c) => a + b + c;

console.log(summed(1)(2)(3));

console.log('-------currying by function closure---------');

const mul = (a) => (b) => b ? mul(a * b) : a;

console.log(mul(1)(2)(3)(4)());

console.log('-------currying by function closure---------');

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log('(1)(2, 3)', curriedSum(1)(2, 3));
console.log('(1, 2)(3)', curriedSum(1, 2)(3));
console.log('(1, 2, 3)', curriedSum(1, 2, 3));
console.log('(1)(2)(3)', curriedSum(1)(2)(3));
