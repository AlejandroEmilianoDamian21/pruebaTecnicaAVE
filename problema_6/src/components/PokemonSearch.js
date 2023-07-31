import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import './pokemonSearch.css';

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setError(null);
      const response = await axios.get(`http://localhost:8080/api/obtenerPokemon?numeroONombre=${searchTerm}`);
      console.log(response.data); // Agrega esta línea para verificar los datos obtenidos
      setPokemonData(response.data);
    } catch (error) {
      setError('No se encontró ningún Pokémon con ese nombre o número.');
      setPokemonData(null);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pokemon-search-container">
      <div className="search-form-container">
        <div className='card-container-search'> 
        <Typography variant="h4" gutterBottom>
          Pokémon Search
        </Typography>
        <TextField
          label="Buscar por nombre o número"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
        <div style={{ marginTop: '5px' }}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Buscar
          </Button>
        </div>
        {error && <Typography color="error">{error}</Typography>}
        </div>
      </div>
      <div className="pokemon-info"></div>
      {pokemonData && (
        <div className="card-container-pokemon">
          <div className="pokemon-info-name">
            <Typography gutterBottom> {capitalizeFirstLetter(pokemonData.nombre)} </Typography>
            </div>
          <div className="card-image-container">
            {pokemonData && pokemonData.imagen && (
              <div className="card-image">
                <img src={pokemonData.imagen} alt={pokemonData.nombre} />
              </div>
            )}
          </div>
          <table className="pokemon-info-table">
            <tbody>
              <tr>
                <td>Número:</td>
                <td>{pokemonData.numero}</td>
              </tr>
              <tr>
                  <td>Tipo:</td>
                  <td>{pokemonData.tipo.map((type) => capitalizeFirstLetter(type)).join(', ')}</td>
                </tr>
              <tr>
                <td>Peso:</td>
                <td>{pokemonData.peso}</td>
              </tr>
              <tr>
                <td>Altura:</td>
                <td>{pokemonData.altura}</td>
              </tr>
            </tbody>
          </table>

          
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
