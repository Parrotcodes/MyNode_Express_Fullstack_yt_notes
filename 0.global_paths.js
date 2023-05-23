//__dirname - This checks and give the file directory path only
//__filename - checks the whole path file directory includeing file name
// require() - import an any module using require
//module - diff concept / methods
//process - 

//setTimeout() - Synchronous -- > This will run and stops the code bcz of setTimeout
    //This is time taking process to execute all the request one by one until the first and second and so on. code are execute line by line next line will be in wait() in stage
//setInterval() - Asynchronous -- > This will run continueusly by the setTimeInterval seconds of  the code bcz of setInterval
    //porcess will stay alive in asynchronous to kill process press CTRL+C
    //Asynchronous is ofloading event loop it loads the data once the actual Javascript code executed then only the offload result will execute and get the output of an asynchronus result.

console.log('__dirname: '+__dirname)
console.log('__filename: '+__filename)
console.log(module)
