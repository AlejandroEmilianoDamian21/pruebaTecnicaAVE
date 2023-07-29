const pokeAPI = require('../controllers/pokeAPI')// Asegúrate de que la ruta sea correcta


async function tieneTipo(req, res) {
  try {
    const numeroPokemon = parseInt(req.query.numero) || 25;
    const tipo = req.query.tipo || 'electric';
    const tieneTipo = await pokeAPI.tieneTipo(numeroPokemon, tipo);
    res.json({ tieneTipo });
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar si el pokémon posee el tipo especificado.' });
  }
}

module.exports = tieneTipo;
