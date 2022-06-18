const { response } = require("express");

const {  getEvolution,  apiPokemon,  getEncounters} = require("../helpers/pokemon");
const { getEvolutions, getAbilities, getEncountersList } = require("../helpers/objects");

const CACHE = {};
const ERROR = {};

const getPokemonCache = async (req, res = response) => {
  res.json({ data: CACHE });
};

const getPokemon = async (req, res = response) => {
  const { name } = req.params;
  if (CACHE[name]) {
    return res.json({ name, infoPokemon: JSON.parse(CACHE[name]), isCached: true });
  }
  if (ERROR[name]) {
    return res.json({ name, infoPokemon: JSON.parse(ERROR[name]), isCached: true });
  }

  try {
    const response = await apiPokemon(name);
    const { data } = await getEvolution(response.species.url);
    const evolution = await getEvolution(data.evolution_chain.url);
    const encounters = await getEncounters(name);

    const encounterArray = getEncountersList(encounters.data)
    const evolesArray = getEvolutions(evolution);
    console.log(evolesArray)
    const abilities = getAbilities(response);

    const infoPokemon = {
      name,
      id: response.id,
      weight: response.weight,
      height: response.height,
      encounters: encounters.data,
      sprites: response.sprites,
      encounterArray: encounterArray, 
      evolesArray,
      abilities,
      date: new Date()
    };

    CACHE[name] = JSON.stringify(infoPokemon);
    res.json({
      infoPokemon,
      isCached: false,
    });
  } catch {
    ERROR[name] = JSON.stringify({ name, error: "Invalid pokemon." });
  }
};

module.exports = {
  getPokemon,
  getPokemonCache,
};
