//asyncronous
console.log("fist task"); //first executes
setTimeout(() => {
  console.log("second task"); //async method of timeout loads first then excutes after console log functions
});
setInterval(() => {
  console.log("I am 1s async.");
}, 1000);
setInterval(() => {
  console.log("I am 2s async.");
}, 2000);
console.log("third task"); //second executes

console.log("I am done my task!"); //globally log executes as third task in a stack
