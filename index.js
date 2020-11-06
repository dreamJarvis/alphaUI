const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json);

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'patientdb'
});

mysqlConnection.connect((err) => {
    if(err)
        throw err;
    else    
        console.log("DB connection succesfull");
}); 

app.get('/', function (res, req) {
    mysqlConnection.query('SELECT * FROM patientdb', (err, rows, fields)=>{
        if(!err)
            console.log("successful query !");
        else    
            console.log(err);
    });
});

app.listen(1337, ()=>{
    console.log("express server is running at port 1337");
});