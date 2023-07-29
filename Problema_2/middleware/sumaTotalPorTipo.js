const pokeAPI = require('../controllers/pokeAPI')

async function sumaTotalPorTipo(req, res) {
  try {
    const tipo1 = req.query.tipo1 || 'fire';
    const sumaTotal = await pokeAPI.sumaTotalPorTipo(tipo1);
    res.json({ sumaTotal });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la suma total de pokémon por tipo.' });
  }
}

module.exports = sumaTotalPorTipo;
