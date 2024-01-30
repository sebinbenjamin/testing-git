let guess;
const SECRET_NUMBER = 3;
while (guess != SECRET_NUMBER) {
  guess = prompt('Enter a secret code');
  console.log("It's a", guess);
}
console.log("You've got the secret !!");
