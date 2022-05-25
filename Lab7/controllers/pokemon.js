const { response } = require("express");
const { getEvolution, apiPokemon } = require("../helpers/pokemon");
const { getEvolutions, getAbilities } = require("../helpers/objects");

const getPokemon = async (req, res = response) => {
  const { pokemon } = req.body;
  try {
    const response = await apiPokemon(pokemon);
    const { data } = await getEvolution(response.species.url);
    const evolution = await getEvolution(data.evolution_chain.url);

    const evolesArray = getEvolutions(evolution);
    const abilities = getAbilities(response);

    console.log("id: ", response.id);
    console.log("name: ", response.name);
    console.log("height: ", response.height);
    console.log("weight: ", response.weight);
    console.log("Abilities: ");
    console.log(abilities);
    console.log("Evolutions: ");
    console.log(evolesArray);

    res.json({
      id: response.id,
      name: response.name,
      weight: response.weight,
      height: response.height,
      Habilidades: abilities,
      evolution: evolesArray,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
    });
  }
};

module.exports = {
  getPokemon,
};
