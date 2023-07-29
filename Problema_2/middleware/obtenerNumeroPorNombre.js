const pokeAPI = require('../controllers/pokeAPI') // Asegúrate de que la ruta sea correcta


async function obtenerNumeroPorNombre(req, res) {
  try {
    const nombrePokemon = req.query.nombre || 'pikachu';
    const numeroPokemon = await pokeAPI.obtenerNumeroPorNombre(nombrePokemon);
    res.json({ numeroPokemon });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el número del pokémon por su nombre.' });
  }
}

module.exports = obtenerNumeroPorNombre;
