// Your task is to write a program using switch that takes a day of the week as input and outputs a console.log message depending on whether it's a workday or the weekend.

const day = 'sunday';
switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday': console.log('workday');
    break;
  case 'saturday':
    console.log('weekend');
    break;
  case 'sunday':
    console.log('weekend');
    break
  default:
    console.log('not a day');
}