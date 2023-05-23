const { readFile, writeFile } = require("fs");

console.log("start..");
readFile("./pathfolder/content/second.txt", "utf8", (err, data) => {
  if (err) {
    return;
  } else {
    console.log(data);
  }
});