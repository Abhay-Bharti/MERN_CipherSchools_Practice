const http = require('node:http');
const port = 3000;

const server = http.createServer((req, res) => {
    const data = {
        fname: "Bruce",
        lname: "Wayne",
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})