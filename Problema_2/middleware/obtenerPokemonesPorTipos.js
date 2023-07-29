const pokeAPI = require('../controllers/pokeAPI')

async function obtenerPokemonesPorTipos(req, res) {
  try {
    const tipo1 = req.query.tipo1 || 'fire';
    const tipo2 = req.query.tipo2 || 'flying';
    const pokemonesTipos = await pokeAPI.obtenerPokemonesPorTipos(tipo1, tipo2);
    res.json({ pokemonesTipos });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pokémon que cumplen con los tipos especificados.' });
  }
}

module.exports = obtenerPokemonesPorTipos;
