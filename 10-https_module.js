//This is old version 2years back now new updates are done inside this http module so may get error in path router paging
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello Home page!");
  }

  if (req.url === "/about") {
    res.end("Hello About page!");
  }

  if (req.url === "/contact") {
    res.end("Hello Contact page!");
  }

    res.end(
      '<h1>OOPS! </h1><p>Please make sure check you router path of a web page!<br/>Page Not Found?</p><a href="/">Go to Home</a>'
    );
});

server.listen(5000);
