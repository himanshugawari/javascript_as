let arr = ['Himanshu', 'Atsuko'];

let obj = {
  name: 'Himanshu',
  city: 'Mumbai',
  getIntro: function () {
    return `${this.name} from ${this.city}`;
  },
};

let obj2 = {
  name: 'Atsuko',
};

obj2.__proto__ = obj;

console.log(obj2.name);
console.log(obj2.city);
console.log(obj.getIntro());
console.log(obj2.getIntro());

//  prtotype chain
// null > Object > Array

// arr.__proto__ === Array.prototype
// arr.__proto__.__proto__ === Object.prototype
// arr.__proto__.__proto__.__proto__ === null

// null > Object > Function
