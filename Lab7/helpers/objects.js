


getEvolutions = (evolution) => {
    const evolutions = [evolution.data.chain.evolves_to];
    let evolutionChain = [];
    let evolesArray = [];
    evolesArray.push(evolution.data.chain.species.name);

    while (evolutions[0] !== undefined && evolutions[0].length !== 0) {
      evolutionChain = evolutions.shift();
      evolutionChain.forEach((element) => {
        if (element) {
          evolesArray.push(element.species.name);
          evolutions.push(element.evolves_to);
        }
      });
    }
    return evolesArray;
}

getAbilities = (response) => {
  const abilities = response.abilities.map((element) => element.ability.name);
  return abilities;
}

module.exports = {
    getEvolutions,
    getAbilities
}