console.log('-------local storage-----------');

localStorage.setItem('hello', 'world2');

console.log(localStorage);

console.log(localStorage.getItem('hello'));

console.log(localStorage.removeItem('hello'));

const user = {
  name: 'Himanshu',
};

localStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('user')));

const arr = ['himanshu', 'atsuko'];

localStorage.setItem('arr', JSON.stringify(arr));

console.log(JSON.parse(localStorage.getItem('arr')));
