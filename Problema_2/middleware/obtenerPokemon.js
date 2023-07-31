const pokeAPI = require('../controllers/pokeAPI');

async function obtenerPokemonPorNumeroONombre(req, res) {
  try {
    let numeroONombre = req.query.numeroONombre // 1 es el número del primer Pokémon, puedes cambiarlo o proporcionar el nombre en su lugar
    // Convertir el nombre a minúsculas si es un nombre de Pokémon
    if (!isNaN(numeroONombre)) { // isNaN devuelve false si el valor no es un número
      numeroONombre = numeroONombre.toLowerCase();
    }

    const pokemonData = await pokeAPI.obtenerPokemon(numeroONombre);
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos del pokémon.' });
  }
}

module.exports = obtenerPokemonPorNumeroONombre;
