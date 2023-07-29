const express = require('express');
const app = express();
const obtenerTodoJunto = require('./middleware/obtenerTodoJunto');
const sumaTotalPorTipo = require('./middleware/sumaTotalPorTipo');
const obtenerPokemonesPorTipos = require('./middleware/obtenerPokemonesPorTipos');
const obtenerNumeroPorNombre = require('./middleware/obtenerNumeroPorNombre');
const obtenerStatsPorNumero = require('./middleware/obtenerStatsPorNumero');
const obtenerPokemonesOrdenadosPorIndicador = require('./middleware/obtenerPokemonesOrdenadosPorIndicador');
const tieneTipo = require('./middleware/tieneTipo');



const apiRouter = express.Router(); 


/**
 * Obtiene todos los datos requeridos en una sola llamada.
 */
apiRouter.get('/pokemones', obtenerTodoJunto );

/**
 * Obtiene la suma total de pokémon por tipo.
 * @param {string} tipo1 - El tipo de pokémon.
 * @returns {Object} - Objeto con la suma total de pokémon por tipo.
 */
apiRouter.get('/sumaTotalPorTipo', sumaTotalPorTipo);

/**
 * Obtiene todos los pokémon que cumplen con dos tipos específicos.
 * @param {string} tipo1 - El primer tipo de pokémon.
 * @param {string} tipo2 - El segundo tipo de pokémon.
 * @returns {Object} - Objeto con los pokémon que cumplen con ambos tipos.
 */
apiRouter.get('/obtenerPokemonesPorTipos', obtenerPokemonesPorTipos);

/**
 * Obtiene el número de un pokémon dado su nombre.
 * @param {string} nombre - El nombre del pokémon.
 * @returns {Object} - Objeto con el número del pokémon.
 */
apiRouter.get('/obtenerNumeroPorNombre', obtenerNumeroPorNombre);

/**
 * Obtiene las 6 stats base de un pokémon dado su número.
 * @param {number} numero - El número del pokémon.
 * @returns {Object} - Objeto con las 6 stats base del pokémon.
 */
apiRouter.get('/obtenerStatsPorNumero/:numero', obtenerStatsPorNumero);
/**
 * Obtiene los pokémon en un arreglo con su nombre, tipo y peso ordenados por un indicador.
 * @param {number[]} ids - Arreglo de números (Ids de pokémon).
 * @param {string} indicador - Indicador para ordenar los pokémon ('nombre', 'tipo' o 'peso').
 * @returns {Object[]} - Arreglo de objetos con nombre, tipo y peso de los pokémon ordenados.
 */
apiRouter.get('/obtenerPokemonesOrdenadosPorIndicador', obtenerPokemonesOrdenadosPorIndicador);
/**
 * Verifica si un pokémon de un número dado posee un tipo específico.
 * @param {number} numero - El número del pokémon.
 * @param {string} tipo - El tipo de pokémon a verificar.
 * @returns {boolean} - True si el pokémon tiene el tipo especificado, False si no.
 */
apiRouter.get('/tieneTipo', tieneTipo);

/*
*El enrutador de la API bajo '/api'
*/
app.use('/api', apiRouter);
/*
*Ruta para manejar 404: Ruta no encontrada
*/
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});
app.listen(3000, () => {
    console.log('Servidor en escuchando en el puerto 3000');
});
