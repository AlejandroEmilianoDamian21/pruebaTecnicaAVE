const pokeAPI = require('../controllers/pokeAPI')

async function obtenerPokemonesOrdenadosPorIndicador(req, res) {
  try {
    const ids = [1, 4, 7, 10]; // Puedes recibir estos IDs desde el query si lo deseas
    const indicador = 'peso'; // Puedes recibir este indicador desde el query si lo deseas
    const pokemonesOrdenados = await pokeAPI.obtenerPokemonesOrdenadosPorIndicador(ids, indicador);
    res.json({ pokemonesOrdenados });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pokémon ordenados.' });
  }
}

module.exports = obtenerPokemonesOrdenadosPorIndicador;
