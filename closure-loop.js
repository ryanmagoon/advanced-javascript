'use strict'
for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log("i: " + i);
  }, i*1000);
}
