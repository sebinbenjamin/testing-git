console.log('This is from app.js');

/*
// Check for +ive, -ive or 0 
let numToCheck = 0;

// = vs == vs ===
if(numToCheck === 0) { // strict equality (checks for type & value)
  console.log(`You've got a zero`);
}
else if(numToCheck > 0) {
  console.log(`You've got a +ive`);
  // if(numToCheck > 20) {
  //   console.log('You\'ve got a big +ive no');
  // }
}
else {
  console.log(`You've got a -ive`);
};
*/

/*
Netflix has a special offer for elderly customers, here is the condition:
(The user must be at least 65 years old.)
AND
(The user must be a premium member OR has a coupon code.)
Please write an if...else statement to check eligibility using logical operators.
*/

const age = 70;
const isPremium = false;
const hasCoupon = true;

/*// Solution 1
if (age > 65) {
  if (isPremium || hasCoupon) {
    console.log('You get a discount');
  }
} else {
  console.log('Sorry you don\'t get a discount.');
}

// Solution 2
if ((age > 65) && (isPremium || hasCoupon)) {
  console.log('You get a discount');
} else {
  console.log('Sorry you don\'t get a discount.');
}*/

// Solution 3 - Ternary
((age > 65) && (isPremium || hasCoupon))
  ? console.log('You get a discount')
  : console.log('Sorry you don\'t get a discount.');