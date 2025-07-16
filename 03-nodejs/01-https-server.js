const http = require("node:http");

const server = http.createServer(
    (req, res) => {
        res.end("Server is up and running");
    }
);

server.listen(3000);