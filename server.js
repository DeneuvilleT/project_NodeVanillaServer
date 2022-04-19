const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

http.createServer(function (req, res) {

   if (req.url === "/favicon.ico") {
      res.writeHead(200, { "content-type": "image/x-icon" });
      res.end();
      return;
   };

   if (req.url === "/") {
      fs.readFile(path.join(__dirname, "views/home.html"), (err, data) => {
         if (err) {
            res.writeHead(404);
            res.end();
         };
         res.writeHead(200, { "content-type": "text/html" });
         res.end(data);
         return;
      });
   };
   
   if (req.url === "/about") {
      fs.readFile(path.join(__dirname, "views/about.html"), (err, data) => {
         if (err) {
            res.writeHead(404);
            res.end();
            return;
         };
         res.writeHead(200, { "content-type": "text/html" });
         res.end(data);
         return;
      });
   };

   if (req.url === "/json") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(
         JSON.stringify({ liste: "Pommes de terres, carrottes" })
      );
      res.end();
      return;
   };


}).listen(PORT, () => {
   console.log(`listening at http://localhost:${PORT}`);
})


