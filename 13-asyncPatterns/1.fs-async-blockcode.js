const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page!");
  }
  if (req.url === "/about") {
    //BLOCKING CODE!!!!
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        console.log(`i: ${i} , j: ${j}`);
      }
    }
    res.end("About Page!");
  }
  res.end("Page not Found?");
});

server.listen(5000, (req, res) => {
  console.log("server stated...");
});