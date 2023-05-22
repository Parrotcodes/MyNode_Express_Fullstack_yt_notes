const userobj = require("./5-exports_module"); //This is from next section of object exported and imported as a method

const nodeMsg = () => {
  console.log("Hello NodeJS");
};

const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

//From the import / require module
console.log(userobj.user)
console.log(userobj.user.name)

//exporting the current file methods
module.exports = { nodeMsg, greetings };
