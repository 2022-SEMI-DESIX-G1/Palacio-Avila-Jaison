const { Router } = require('express');
const { getPokemon } = require('../controllers/pokemon');

const router = Router();

router.get('/', getPokemon);



module.exports = router;