const { readFileSync, writeFileSync } = require("fs");

//File Sync method
console.log('start');
const first = readFileSync("./pathfolder/content/first.txt", "utf-8");
const second = readFileSync("./pathfolder/content/second.txt", "utf-8");

console.log(first);
console.log(second);

const user = "Rocky";
writeFileSync(
  "./pathfolder/content/writingsync.txt",
  `Hello Mr.${user}! The final result of combined two readFileSync : ${first} and ${second}.`
);

const appendMode = writeFileSync(
    "./pathfolder/content/appendingText.txt",
    `Hello Mr.${user}! The final result of Appending  Extra two readFileSync : ${first} and ${second}. Appended Text`,
    {flag:'a'}
  );

  console.log('done with the task');
  console.log('statring the next task');