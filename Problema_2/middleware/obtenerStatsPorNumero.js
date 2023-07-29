const pokeAPI = require('../controllers/pokeAPI') // Asegúrate de que la ruta sea correcta


async function obtenerStatsPorNumero(req, res) {
  try {
    const numeroPokemon = parseInt(req.params.numero) || 25;
    const statsPikachu = await pokeAPI.obtenerStatsPorNumero(numeroPokemon);
    res.json({ statsPikachu });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las stats del pokémon por su número.' });
  }
}

module.exports = obtenerStatsPorNumero;
