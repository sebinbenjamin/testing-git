"use strict";

const person = { firstName: "Rob", lastName: "Petrie", };

function printNameFromObject(obj) { 
  console.log(`Hello${obj.firstName}${obj.lastName}`); 
} 

printNameFromObject(person);//"HelloRobPetrie"