const pokeAPI = require('../controllers/pokeAPI')

async function obtenerTodoJunto (req, res) {
    try {
        // Ejemplo de uso de las funciones en una ruta del servidor
        const tipo1 = req.query.tipo1 || 'fire';
        const tipo2 = req.query.tipo2 || 'flying';
        const nombrePokemon = req.query.nombre || 'pikachu';
        const numeroPokemon = parseInt(req.query.numero) || 25;


        const sumaTotal = await pokeAPI.sumaTotalPorTipo(tipo1);
        const pokemonesTipos = await pokeAPI.obtenerPokemonesPorTipos(tipo1, tipo2);
        const numeroPikachu = await pokeAPI.obtenerNumeroPorNombre(nombrePokemon);
        const statsPikachu = await pokeAPI.obtenerStatsPorNumero(numeroPokemon);
        const pokemonesOrdenados = await pokeAPI.obtenerPokemonesOrdenadosPorIndicador([1, 4, 7, 10], 'peso');
        const tieneTipo25 = await pokeAPI.tieneTipo(25, 'electric');

        res.json({

            sumaTotal,
            pokemonesTipos,
            numeroPikachu,
            statsPikachu,
            pokemonesOrdenados,
            tieneTipo25,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener información de la PokeAPI.' });
    }
}

module.exports = obtenerTodoJunto;