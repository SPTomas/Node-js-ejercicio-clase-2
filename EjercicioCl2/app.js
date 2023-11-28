const readlineSync = require('readline-sync');
const {ramdonNum, verificarNumero, ingresarNumero} = require('./adivina');



const juego = () => {
    console.log('¡Bienvenido a el juego Adivina el numero secreto!');
    console.log('Intenta adivinar un numero del 1 al 100...');

    const secreto = ramdonNum();

    let adivinado = undefined;
    let intentos = 0;
    a = true

    while (a) {
        adivinado = ingresarNumero();
        a = verificarNumero(adivinado, secreto);
        intentos++
    }

    console.log(`Lo lograste en ${intentos} intentos`);
};

juego();
