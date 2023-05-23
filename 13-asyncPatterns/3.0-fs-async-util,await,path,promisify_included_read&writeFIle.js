const { readFile, writeFile } = require("fs");
const path = require("path");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

console.log("start..");

const start = async () => {
  try {
    const first = await readFilePromise("./pathfolder/content/first.txt",'utf8');
    const second = await readFilePromise("./pathfolder/content/second.txt",'utf8');

    console.log(`First : ${first} and Second : ${second}`);

    await writeFilePromise('./13-asyncPatterns/writeFilePromise.txt',`THIS IS AWSOME : YOU WROTE TO THE FILE i.e ${first} and ${second}`)//{flag:'a'} -> appending Text to WriteFile

    const writeFilePromiseRead = await readFilePromise('./13-asyncPatterns/writeFilePromise.txt','utf8')
    console.log(writeFilePromiseRead);
    
  } catch (error) {
    console.log(`${error}`);
  }
};

start();


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// Reading File by using async & await

// const start = async () => {
//   try {
//     const first = await getText("./pathfolder/content/first.txt");
//     const second = await getText("./pathfolder/content/second.txt");

//     console.log(`First : ${first} and Second : ${second}`);
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

// start();

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
