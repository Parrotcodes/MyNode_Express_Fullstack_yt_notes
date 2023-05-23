const {readFile,writeFile} = require('fs')

console.log('First line ');

readFile('./pathfolder/content/first.txt','utf8',(err,result)=>{
    if(err){
    console.log('Error:'+err);
    }else{
        console.log(result);
    }
    console.log('Inside callback function log line ');
})

console.log('Last line ');
console.log('Done! ');