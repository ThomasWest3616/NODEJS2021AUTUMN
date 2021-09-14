// const { application } = require("express");
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send({ });
});

app.get("/adventureTime", (req, res) => {
    res.send({ name: "Thomas West", alder: "27" });
});

// path variable
// /endpoint/{someValue}

// querry paramter
// https://www.google.dk/search?q=dsadsad&sxsrf=AOaemvJAiH

app.get("/senddata", (req, res) => {
   console.log(req.query.svar);
    res.send({ svar: req.query.svar })
});



app.get("/favoriteNumber/:number", (req, res) => {

res.send({ 
    number: req.params.number, 
    nice: req.params.number == 1
    });
});




app.listen(3000);


