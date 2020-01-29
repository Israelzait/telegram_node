
//modelo de ECS 6
// import express from 'express';

///////////////////


//modelo de node
const express = require('express');
const bodyParser = require('body-parser');


// const router =  require('./componets/message/network')
const router = require ('./network/routes');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));
// app.use(router);

router(app);




app.use('/app', express.static('public'))

app.listen(3000);
var nodeEscucha = 'La aplicacion esta escuchando en http://localhost:3000';

console.log(nodeEscucha);
