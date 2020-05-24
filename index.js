const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const morgan = require('morgan')
const dotenv = require('dotenv');


const app = new express();
const cors = require("cors");

const http = require('http').createServer(app);





dotenv.config();


app.use(cors())









app.use(morgan('dev'))
app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

const api = require('./app/routes')


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,authtoken"
    );
    next();
});
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use("/api", api);



//DB connection
mongoose.connect('mongodb://localhost:27017/booking', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, data) => {
    if (err) console.log(err)
    else console.log("Mongo DB connected")
});
mongoose.set('useFindAndModify', false);



let port
if (process.env.PORT === undefined)
    port = 8081
else
    port = process.env.PORT
http.listen(port, () => {

    console.log(`🚀 app listening on port ${port}!`)

})
