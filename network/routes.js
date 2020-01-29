

const express = require('express');

const message = require ('../componets/message/network');

// componets = todos lso componentes 

//message  == toda al informacion y toda 
                //al logica 
                //a los mensajes y como 
                
//network ==
                // como qeremos gestionar 
                // la parte de red 



const routers = function (server) {

    server.use('/message', message );
}

    module.exports = routers;