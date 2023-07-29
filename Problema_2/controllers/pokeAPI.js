// Importamos la librería 'axios' para hacer peticiones HTTP
const axios = require('axios');

// URL base de la API de PokeAPI
const baseURL = 'https://pokeapi.co/api/v2';

// Función que obtiene la suma total de pokémon por tipo
async function sumaTotalPorTipo(tipo) {
  try {
    const response = await axios.get(`${baseURL}/type/${tipo}`);
    return response.data.pokemon.length;
  } catch (error) {
    throw new Error(`No se pudo obtener la suma total de pokémon por tipo '${tipo}'.`);
  }
}

// Función que retorna todos los pokémon que cumplen con dos tipos específicos
async function obtenerPokemonesPorTipos(tipo1, tipo2) {
  try {
    const response1 = await axios.get(`${baseURL}/type/${tipo1}`);
    const response2 = await axios.get(`${baseURL}/type/${tipo2}`);
    const pokemonesTipo1 = response1.data.pokemon.map((pokemon) => pokemon.pokemon.name);
    const pokemonesTipo2 = response2.data.pokemon.map((pokemon) => pokemon.pokemon.name);
    return pokemonesTipo1.filter((nombre) => pokemonesTipo2.includes(nombre));
  } catch (error) {
    throw new Error(`No se pudieron obtener los pokémon que cumplen con los tipos '${tipo1}' y '${tipo2}'.`);
  }
}

// Función que retorna el número de un pokémon dado su nombre
async function obtenerNumeroPorNombre(nombre) {
  try {
    const response = await axios.get(`${baseURL}/pokemon/${nombre}`);
    return response.data.id;
  } catch (error) {
    throw new Error(`No se pudo obtener el número del pokémon '${nombre}'.`);
  }
}

// Función que retorna un objeto con las 6 stats base de un pokémon dado su número
async function obtenerStatsPorNumero(numero) {
  try {
    const response = await axios.get(`${baseURL}/pokemon/${numero}`);
    const { stats } = response.data;
    const statsBase = {};
    stats.forEach((stat) => {
      statsBase[stat.stat.name] = stat.base_stat;
    });
    return statsBase;
  } catch (error) {
    throw new Error(`No se pudieron obtener las stats del pokémon con número '${numero}'.`);
  }
}

// Función que retorna un arreglo de pokémon ordenados según el indicador especificado
async function obtenerPokemonesOrdenadosPorIndicador(ids, indicador) {
  try {
    const pokemones = await Promise.all(ids.map(async (id) => {
      const response = await axios.get(`${baseURL}/pokemon/${id}`);
      return {
        nombre: response.data.name,
        tipo: response.data.types.map((type) => type.type.name),
        peso: response.data.weight,
      };
    }));

    return pokemones.sort((a, b) => a[indicador] - b[indicador]);
  } catch (error) {
    throw new Error('No se pudieron obtener los pokémon ordenados.');
  }
}

// Función que retorna true o false si el pokémon con el número indicado posee el tipo especificado
async function tieneTipo(numero, tipo) {
  try {
    const response = await axios.get(`${baseURL}/pokemon/${numero}`);
    const tiposPokemon = response.data.types.map((type) => type.type.name);
    return tiposPokemon.includes(tipo);
  } catch (error) {
    throw new Error(`No se pudo verificar si el pokémon con número '${numero}' posee el tipo '${tipo}'.`);
  }
}


module.exports = {
    sumaTotalPorTipo,
    obtenerPokemonesPorTipos,
    obtenerNumeroPorNombre,
    obtenerStatsPorNumero,
    obtenerPokemonesOrdenadosPorIndicador,
    tieneTipo,
  };