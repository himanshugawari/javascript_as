let arr = [1, 2, 4, 8, 10];
console.log(arr);

console.log('------------------ map ---------------------------');

// map method
let tempMap = arr.map((value, index, array) => {
  return value * 2;
});
console.log(tempMap);

// polyfill for map
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let tempMyMap = arr.myMap((value, index, array) => {
  return value * 2;
});
console.log(tempMyMap);

console.log('------------------ reduce ---------------------------');

// reduce method
let tempReduce = arr.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue;
  },
  5
);
console.log(tempReduce);

// polyfill for reduce
Array.prototype.myReduce = function (callback, initailValue) {
  let result = initailValue;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

let tempMyReduce = arr.myReduce(
  (previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue;
  },
  5
);
console.log(tempMyReduce);

console.log('------------------ filter ---------------------------');

// filter method
let tempFilter = arr.filter((value, index, array) => {
  return value > 5;
});
console.log(tempFilter);

// polyfill for filter
Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

let tempMyFilter = arr.myFilter((value, index, array) => {
  return value > 5;
});
console.log(tempMyFilter);

console.log('------------------ find ---------------------------');

// find method
let tempFind = arr.find((value, index, array) => {
  return value === 8;
});
console.log(tempFind);

// polyfill for find
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return this[i];
  }
};

let tempMyFind = arr.myFind((value, index, array) => {
  return value === 8;
});
console.log(tempMyFind);
