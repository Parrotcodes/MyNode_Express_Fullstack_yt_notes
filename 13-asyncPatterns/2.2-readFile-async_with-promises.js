const { readFile, writeFile } = require("fs");
const path = require("path");

console.log("start..");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Reading File by using async & await

const start = async () => {
  try {
    const first = await getText("./pathfolder/content/first.txt");
    const second = await getText("./pathfolder/content/second.txt");

    console.log(`First : ${first} and Second : ${second}`);
  } catch (error) {
    console.log(`${error}`);
  }
};

start();

//Reading File by using Promise

// getText("./pathfolder/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// getText("./pathfolder/content/second.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// getText("./pathfolder/content/writingsync.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
