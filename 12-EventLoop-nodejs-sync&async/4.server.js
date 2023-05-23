const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log('request event found...');
    res.end("Hello World!");
  }else{
    console.log('check you path....');
    res.end('path not found?')
  }
});

server.listen(3000, () => {
  console.log("server started on port 3000...");
});