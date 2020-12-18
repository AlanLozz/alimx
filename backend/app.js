const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Database
let dbOptions = {
    host: process.env.HOST,
    user: process.env.USR,
    password: process.env.PSWD,
    database: process.env.DB
}
app.use(myConnection(mysql,dbOptions,'single'));

//Router
app.use(require('./src/routes/index'));

//Server listener
app.listen(app.get('port'),()=>{
    console.log(`Server on port: ${app.get('port')}`);
});