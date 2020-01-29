

// se va a encargar de definir todo lo que 
// sucede  creando las funciones necesarias

function addmMessage(user , message) {

    // console.log(user);
    // console.log( message);

    const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
    };
    console.log(fullMessage);

}

module.exports = {
    addmMessage,
};
