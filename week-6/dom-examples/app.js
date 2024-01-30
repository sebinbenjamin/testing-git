"use strict";

let count = 0; // locally scoped to the file
// Global => common to all files in the html

function incrementCount() {
  // Increment the count
  count = count + 1;
  // Update the count in the DOM by grabbing the #
  document.getElementById("countElement").innerText = count;
}