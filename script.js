// input
let user = {
  name: 'Himanshu',
  address: {
    personal: {
      city: 'Mumbai',
      area: 'South Bombay',
    },
    office: {
      city: 'Bangalore',
      area: {
        landmark: 'Btm Layout',
      },
    },
  },
  contact: '1234567890',
};

console.log(user);

// output

let obj = {
  user_name: 'Himanshu',
  user_address_personal_city: 'Mumbai',
  user_address_personal_area: 'South Bombay',
  user_address_office_city: 'Bangalore',
  user_address_office_area_landmark: 'Btm Layout',
  user_contact: '1234567890',
};

console.log(obj);

// solution
let finalObj = {};

let solve = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      solve(obj[key], parent + '_' + key);
    } else {
      finalObj[parent + '_' + key] = obj[key];
    }
  }
};

solve(user, 'user');
console.log(finalObj);
