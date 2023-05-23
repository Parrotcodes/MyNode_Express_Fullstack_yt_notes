//This is very easy and simple to read async readFile and writeFile method
const { readFile, writeFile } = require("fs").promises;

console.log("Start:- async of readFile and writeFile");

const Start = async () => {
  try {
    //readFile using async , await and fs.promises
    const first = await readFile("./pathfolder/content/first.txt", "utf8");
    const second = await readFile("./pathfolder/content/second.txt", "utf8");

    console.log(first);
    console.log(second);

    //Error Detects because file does not exist
    // const awaitWrittenFile = await readFile('./pathfolder/content/fs-async-writeFile.txt','utf8')
    // console.log(awaitWrittenFile);

    //writeFile using async , await and fs.promises
    await writeFile(
      "./pathfolder/content/fs-asyc-writeFile.txt",
      "THIS IS Ultimate Task of WriteFile Using async promises of fs-module using await and async () libraries from the nodeJS modules."
    );

    //No Errors were detects because this file is created and written some text into it using writeFile method
    const awaitWrittenFile = await readFile(
      "./pathfolder/content/fs-asyc-writeFile.txt",
      "utf8"
    );
    console.log(awaitWrittenFile);
  } catch (error) {
    console.log(error);
  }

  console.log('End of Async callback() function using fs module promises.');
};

Start();

console.log("EOF:- async of readFile and writeFile");