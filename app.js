const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("This is response from server");
});

app.get("/add", (req, res) => {
    let { a: first, b: second } = req.query;
    let sum = parseInt(first) + parseInt(second);
    res.send({sum});
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});