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

/*
Customer care service in hospital refers to the support and care given to people by a hospital1. It involves providing service in an environment where the goals of the customer can be complex, and where appropriate service may take the provider from the typical customer service approach of striving to provide immediate customer gratification2. Some ways to provide customer care service in hospital are:

Deliver end-to-end service from scheduling to long after discharge3
Use SMS reminders to reduce missed appointments4
Listen empathetically and communicate clearly with patients
Respect patients’ privacy and confidentiality
Address patients’ concerns and complaints promptly
Provide accurate and timely information about treatments and procedures
Seek feedback from patients and improve based on their suggestions
Recognize and appreciate patients’ loyalty and referrals
*/