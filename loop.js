//multiplication table from 1-5
// let i, j;

// for (i = 1; i <= 5; i++) {
//   console.log('\n');
//   for (j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//Display black in odd and white in even upto 16 times.
let initNum = 1;
const fixedNum = 2;
while (initNum <= 8) {
  if (initNum % fixedNum == 0) {
    for (var i = 1; i <= 8; i++) {
      if (i % 2 == 0) {
        console.log('White');
      } else {
        console.log('black');
      }
    }
  } else {
    for (var i = 1; i <= 8; i++) {
      if (i % 2 == 0) {
        console.log('White');
      } else {
        console.log('black');
      }
    }
  }
  console.log('\n');
  initNum++;
}
