const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularEstadisticasNumeros(numeros) {
  // Paso 2: Calcular la cantidad de elementos del arreglo
  const cantidadElementos = numeros.length;

  // Paso 3: Calcular el porcentaje de números pares e impares
  let pares = 0;
  let impares = 0;

  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  });

  const porcentajePares = (pares / cantidadElementos) * 100;
  const porcentajeImpares = (impares / cantidadElementos) * 100;

  // Paso 4: Calcular el porcentaje de números mayores a 1000
  let mayores1000 = 0;

  numeros.forEach((numero) => {
    if (numero > 1000) {
      mayores1000++;
    }
  });

  const porcentajeMayores1000 = (mayores1000 / cantidadElementos) * 100;

  // Paso 5: Encontrar el mayor y menor valor en el arreglo
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);

  // Paso 6: Calcular el porcentaje del número mínimo y el porcentaje del promedio de todos los números
  const porcentajeNumeroMinimo = (minimo / maximo) * 100;

  const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  const promedio = sumaTotal / cantidadElementos;
  const porcentajePromedio = (promedio / maximo) * 100;

  // Mostrar resultados
  console.log(`Cantidad de elementos del arreglo: ${cantidadElementos}`);
  console.log(`Porcentaje de números pares: ${porcentajePares}%`);
  console.log(`Porcentaje de números impares: ${porcentajeImpares}%`);
  console.log(`Porcentaje de números mayores a 1000: ${porcentajeMayores1000}%`);
  console.log(`Mayor valor: ${maximo}`);
  console.log(`Menor valor: ${minimo}`);
  console.log(`Porcentaje del número mínimo: ${porcentajeNumeroMinimo}%`);
  console.log(`Porcentaje del promedio: ${porcentajePromedio}%`);
}

rl.question('Ingresa los números separados por espacio: ', (input) => {
  const numeros = input.split(' ').map((numero) => parseInt(numero, 10));

  if (numeros.some(isNaN)) {
    console.log('Error: Ingresa solo números separados por espacio.');
  } else {
    calcularEstadisticasNumeros(numeros);
  }

  rl.close();
});
