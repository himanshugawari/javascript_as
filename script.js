// Promises in JS

// synchronous vs assynchronous code

// console.log('--------------------synchronous----------------------');
// console.log('start');
// console.log('sync code');
// console.log('stop');

// console.log('--------------------asynchronous----------------------');
// console.log('start');
// setTimeout(() => {
//   console.log('async code');
// }, 0);
// console.log('stop');

// console.log('--------------------Promise----------------------');
// console.log('start');
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = true;
//     if (result) {
//       resolve('RESOLVED');
//     } else {
//       reject('REJECTED');
//     }
//   }, 0);
// });
// p.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });
// console.log('stop');

console.log('--------------------Promises----------------------');
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1'), 1000);
});
const p2 = function temp(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`p2 ${val}`), 1000);
  });
};

// console.log('--------------------promises chaining----------------------');
// p1.then((res) => {
//   console.log(res);
//   return p2('helloooo world');
// }).then((res) => {
//   console.log(res);
// });

// console.log('--------------------promises combinator all----------------------');
// wait till all promises are completed and then return
// even if one promise fails all fails and returns in catch failed promise

// Promise.all([p1, p2('hello')])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('--------------------promises combinator race-------------------');
// returns the first promise to be fullfilled or rejected

// Promise.race([p1, p2('hello')])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('---------------promises combinator allSettled----------------');
// wait till all are fullfilled or rejected and then return arry with all fullfilled or rejected promises

// Promise.allSettled([p1, p2('hello')])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('---------------promises combinator any----------------');
// returns the first promise to be fullfilled, if any are rejected prmomises are ignored  before the first fulfilled promise
// if all promises fail, it fails

// Promise.any([p1, p2('hello')])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('---------------async/await----------------');
// const result = async () => {
//   try {
//     const m1 = await p1;
//     const m2 = await p2('async-await');
//     console.log(m1, m2);
//   } catch (error) {
//     console.log('error', error);
//   }
// };
// result();

// console.log('---------------promise polyfill----------------');
// const tempPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// tempPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// function MyPromise(executor) {
//   let onResolve,
//     onReject,
//     isFullfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;
//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve === 'function') {
//       onResolve(val);
//       isCalled = true;
//     }
//   }
//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onReject === 'function') {
//       onReject(val);
//       isCalled = true;
//     }
//   }
//   this.then = function (callbcak) {
//     onResolve = callbcak;
//     if (isFullfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value);
//     }
//     return this;
//   };
//   this.catch = function (callbcak) {
//     onReject = callbcak;
//     if (isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value);
//     }
//     return this;
//   };
//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// }

// const tempMyPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// tempMyPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// MyPromise.resolve = (val) =>
//   new MyPromise(function executor(resolve, reject) {
//     resolve(val);
//   });

// MyPromise.reject = (val) =>
//   new MyPromise(function executor(resolve, reject) {
//     reject(val);
//   });

// MyPromise.resolve(3).then((res) => console.log(res));

console.log('---------------promise.all polyfill----------------');
// Promise.all([p1, p2('hello')]).then((res) => console.log(res));

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        pending--;
        if (pending === 0) resolve(results);
      }, reject);
    });
  });
};
Promise.myAll([p1, p2('hello')])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
