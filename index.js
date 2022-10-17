{
  /*let a = 10,
  b = 20;
console.log('addition: ', a + b);
a = 40;
console.log('subtraction: ', a - b);
console.log('multiplication: ', a * b);
console.log('Division: ', a / b);*/
}
const arzooKoBare = (article) => {
  let obj = { name: 'arzoo', attribute: 'Queen' };
  console.log(`${article} ${obj.name} is a ${obj.attribute}`);

  obj.attribute = 'princess';
  obj['attribute'] = 'Darling';
  console.log(`${article} ${obj.name} is a ${obj.attribute}`);
};
// arzooKoBare('My');

const colorSelection = () => {
  let colors = ['red', 'green', 'blue'];
  console.log(colors[0]);
  colors[0] = 'Yellow';
  console.log(colors[0]);
  console.log(typeof colorSelection);
  console.log(typeof colors);
  console.log(typeof colors[0]);
};

// colorSelection();

const swapValue = () => {
  let a = 1;
  let b = 2;
  let temp;
  temp = b; //-->2
  b = a; //--->1
  a = temp; //2--->2
  console.log('a: ', a);
  console.log('b: ', b);
};
// swapValue();

function landPotr(width, heigth) {
  // if (width > heigth) {
  //   console.log('landscape');
  // } else {
  //   console.log('potrait');
  // }
  return width > heigth;
}

console.log(landPotr(10, 2));
