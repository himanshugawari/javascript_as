console.log('--------debounce----------');

let counter = 0;
function getData() {
  console.log('FETCHING DATA...', counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function (...args) {
    let scope = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(scope, args);
    }, d);
  };
};

const betterGetData = debounce(getData, 300);

console.log('--------throttle----------');

const throttle = function (fn, d) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, d);
  };
};

const betterPerformance = throttle(getData, 1000);
