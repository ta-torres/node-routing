import http from "http";
import fs from "fs";

const PORT = 8080;

const server = http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact":
      filePath = "contact.html";
      break;
    default:
      filePath = "error.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error: " + err.code);
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
