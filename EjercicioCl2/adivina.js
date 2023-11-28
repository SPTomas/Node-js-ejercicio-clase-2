const readlineSync = require('readline-sync');

const ramdonNum = () => {
    return Math.floor(Math.random() * 100) + 1
};


const verificarNumero = (adivinado, secreto) => {
    if (adivinado == secreto) {
        console.log('Adivinaste el numero :)');
        return false
    } else if (adivinado > secreto){
        console.log('EQUIVOCADO, el numero es menor :(');
    } else {
        console.log('EQUIVOCADO, el numero es mayor :(');
    }
    return true
};

const ingresarNumero = () => {
    return (readlineSync.question('Ingrese el numero: '));
};

module.exports = {ramdonNum, verificarNumero, ingresarNumero}