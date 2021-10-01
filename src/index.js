const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()  
    });

const port = 6969;
const library = {
    movies: 32,
    books: 23453423,
    games: 2
}


app.get("/healthcheck", (req, res) => res.json({msg: "HAAAALOOOOOOOOOOO"}));
app.get("/library", (req, res) => {
    const mediaType = req.query.type;

    return res.json(`The media type: ${mediaType} has ${library[mediaType]} units `)
});
app.post("/printname", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    return res.json(`name: ${name}, age: ${age}`)
});

app.listen(port, () => {
    return console.log(`Port: ${port}`)
});



