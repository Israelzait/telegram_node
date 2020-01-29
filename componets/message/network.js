

const express = require('express');

const response = require('../../network/response')

const controller = require ('./controller');

const router = express.Router();


router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-headers": "Nuestro valor personalizado",
    });
    response.success(req, res,  "Listas de mensaje");
})


router.post('/', function (req, res) {
    // res.send('Mensaje añadido ')

    // res.status(201) .send( {error: '', body : 'creado correctamente'});
    
    controller.addmMessage(req.body.user, req.body.message);
        if (req.query.error == "ok") {
          response.error ( req, res, 'Error Inesperado  ', 500, "es una simulacion de err");

        } else{
          response.success ( req, res, 'Creado Correctamente', 201);

        }

    // console.log(req.body);
    // res.send('Mensaje ' + req.body.text + ' Borrado ');
    
})

router.delete('/', function (req, res) {
    console.log(req.query);

    console.log(req.body);
    // res.send('Mensaje ' + req.body.text + ' Borrado ');


})


module.exports = router;