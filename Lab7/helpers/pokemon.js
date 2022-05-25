const axios = require("axios");

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const apiPokemon = async (pokemon) => {
  const { data } = await axios.get(`${apiUrl}/${pokemon}`);
  return data;
};

const getEvolution = async (url) => {
  const response = await axios.get(url);
  return response;
};

module.exports = {
  apiPokemon,
  getEvolution,
};


