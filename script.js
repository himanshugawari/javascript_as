let name1 = {
  fname: 'Himanshu',
  lname: 'Gawari',
};

function printFullName(hometown, country) {
  console.log(`${this.fname} ${this.lname} from ${hometown} in ${country}`);
}

let name2 = {
  fname: 'Atsuko',
  lname: 'Maeda',
};

// function borrowing
printFullName.bind(name1, 'Mumbai', 'India')();
printFullName.bind(name1, 'Mumbai')('India');
printFullName.bind(name1)('Mumbai', 'India');

printFullName.call(name1, 'Mumbai', 'India');

printFullName.apply(name1, ['Mumbai', 'India']);

console.log('-----------------------------------------------');

printFullName.bind(name2, 'Tokya', 'Japan')();
printFullName.bind(name2, 'Tokya')('Japan');
printFullName.bind(name2)('Tokya', 'Japan');

printFullName.call(name2, 'Tokya', 'Japan');

printFullName.apply(name2, ['Tokya', 'Japan']);

console.log('-----------------------------------------------');

// polyfill for bind
Function.prototype.myBind = function (scope, ...args) {
  // scope is object name1
  // this is function printFillName
  // console.log(scope, this);
  scope._this = this;
  return function (...args2) {
    scope._this(...args, ...args2);
  };
};

printFullName.myBind(name1, 'Mumbai', 'India')();
printFullName.myBind(name1, 'Mumbai')('India');
printFullName.myBind(name1)('Mumbai', 'India');

console.log('-----------------------------------------------');

// polyfill for call
Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  scope._this(...args);
};

printFullName.myCall(name1, 'Mumbai', 'India');

console.log('-----------------------------------------------');

// polyfill for apply
Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  scope._this(...args);
};

printFullName.myApply(name1, ['Mumbai', 'India']);
