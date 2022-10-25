const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 4000;

const productsCollection = require("./data/data.json")

app.get("/", (req, res) => {
    res.send("now server is running")
});

app.get("/Product", (req, res) => {
    res.send(productsCollection)
});


app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = productsCollection?.find(p => p.id == id);
    if (!getSingleItem) {
        res.send("This Product not found");
    }
    res.send(getSingleItem)
});

app.listen(Port, () => {
    console.log('server is running', Port);
});


module.exports = app;
