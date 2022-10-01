// console.log('--------event bubbling/capturing----------');
// bubbling from inside to outside
// capturing from outside to inside

// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// grandparent.addEventListener('click', () => {
//   console.log('grandparent');
// });

// parent.addEventListener('click', () => {
//   console.log('parent');
// });

// child.addEventListener('click', (e) => {
//   console.log('child');
//   e.stopPropagation();
// });

console.log('--------event delegation----------');
//  rather than attaching event handleer to each child attach event hadler to parent

document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e.target.id);
});
