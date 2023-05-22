const os = require('os')

// console.log(os);

console.log('UserInfo: '+os.userInfo());
console.log('Total Memory: '+os.totalmem());
console.log('Free Memory: '+os.freemem());
console.log('Version: '+os.version());
console.log('HostName: '+os.hostname());
console.log('Home Directory: '+os.homedir());

const currentOS = {
    name: os.type(),
    release:os.release(),
    time:os.uptime(),
    Version:os.version()
}

console.log(`My Current Os Info: ${currentOS}`)
console.log(currentOS);