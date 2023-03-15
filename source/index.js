require('dotenv').config();

//Thư viện
//Rate-limit
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');


const app = express();


//setting
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/publics"));
app.use(express.static(__dirname + "/uploads"));

// Routers
const AdminRouter = require('./routers/AdminRouter');


app.use('/Admin', AdminRouter);


app.get('/', (req, res) => {
    return res.write("<h1>Hello</h1>");
})


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`http://localhost:${port}`));

