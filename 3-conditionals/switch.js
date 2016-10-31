// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday

switch(today){
  case 'Monday':
    console.log('One Day');
    break;
  case 'Tuesday':
    console.log('Two Day');
    break;
  case 'Wednesday':
    console.log('When, what, who?');
    break;
  case 'Thursday':
    console.log('Thursday! The THIRD DAY');
    break;
  case 'Friday':
    console.log('Burgers and Friday');
    break;
  case 'Saturday':
    console.log('Too lazy to run so its Saturday');
  case 'Sunday':
    console.log("Ironic in Scotland as it's never a sun day");
    break;
  default:
    console.log('Please supply a day of the week');
}
