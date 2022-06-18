const { Router } = require('express');
const { getPokemon, getPokemonCache } = require('../controllers/pokemon');

const router = Router();


router.get('/cache', getPokemonCache);
router.post('/:name', getPokemon);



module.exports = router;