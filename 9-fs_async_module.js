const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./pathfolder/content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  //   console.log(first);
  readFile("./pathfolder/content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // console.log(second);
    writeFile(
      "./pathfolder/content/AsyncFileWrite.txt",
      `Here is the result of Text Files from the readFile : ${first} and ${second}!`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
    console.log("done with the task");
  });
});

console.log("statring the next task");
