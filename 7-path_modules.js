// console.log('Hello NodeJS - This is Your Practice Session!');
const path = require('path')

console.log('NodeJS - This is Your Path Module Session!');
console.log(path);

console.log(path.sep);
console.log(__dirname);
console.log(__filename);

//without path module like path.fun()
console.log('/pathfolder','subfolder');


//dummy file path 
const myPath =path.join('/pathfolder','subfolder','index.txt')
console.log(myPath);
console.log(path.basename(myPath))

//from the Practice code folders
const filePath = path.join(__dirname,'pathfolder','subfolder','path.txt')
console.log(filePath);
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname,'pathfolder')
console.log(absolute)


