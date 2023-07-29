const readline = require('readline');

function multiplicarSinOperador(x, y) {
    // Manejamos el caso especial si alguno de los números es cero
    if (x === 0 || y === 0) {
        return 0;
    }

    // Mantenemos el signo del resultado
    let signo = (x < 0) ^ (y < 0) ? -1 : 1;

    // Convertimos ambos números a valores absolutos para simplificar el proceso
    x = Math.abs(x);
    y = Math.abs(y);

    let resultado = 0;
    while (y > 0) {
        // Sumamos el valor de 'x' al resultado tantas veces como el valor de 'y'
        resultado += x;
        y--;
    }

    return signo === 1 ? resultado : -resultado;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerNumero(mensaje, callback) {
    rl.question(mensaje, (numero) => {
        const valor = parseFloat(numero);

        if (isNaN(valor)) {
            console.log('Por favor, ingresa un número válido.');
            obtenerNumero(mensaje, callback); // Llamada recursiva para pedir el número nuevamente
        } else {
            callback(valor);
        }
    });
}

obtenerNumero('Ingresa el valor de x: ', (numero1) => {
    obtenerNumero('Ingresa el valor de y: ', (numero2) => {
        const x = parseFloat(numero1);
        const y = parseFloat(numero2);

        // Calcular el resultado de la multiplicación utilizando la función
        const resultado = multiplicarSinOperador(x, y);

        // Mostrar el resultado por consola
        console.log(`El resultado de ${x} * ${y} es: ${resultado}`);

        rl.close();
    });
});
