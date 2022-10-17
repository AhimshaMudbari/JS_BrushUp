var date = new Date();

var currentTime = parseInt(date.toTimeString().slice(0, 8));

if (currentTime >= 12 && currentTime < 19) {
  console.log('Goood Afternoon');
} else if (currentTime >= 19) {
  console.log('Good Night');
} else {
  console.log('Good morning');
}

var day = date.toDateString().slice(0, 3);
switch (`${day.toString()}`) {
  case 'Sun':
    console.log(`It\'s ${day}day`);
    break;
  case 'Mon':
    console.log(`It\'s ${day}day`);
    break;
  case 'Tue':
    console.log(`It\'s ${day}day`);
    break;
  case 'Wed':
    console.log(`It\'s ${day}day`);
    break;
  case 'Thu':
    console.log(`It\'s ${day}day`);
    break;
  case 'Fri':
    console.log(`It\'s ${day}day`);
    break;
  default:
    console.log(`It\'s Saturday`);
}
