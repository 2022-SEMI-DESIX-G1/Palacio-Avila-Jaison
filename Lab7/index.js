const express = require('express');
require('dotenv').config()

const app = express();

app.use( express.json() );

app.use('/api/pokemon', require('./routes/pokemon'))

app.listen(process.env.PORT, () => console.log('Server on port ', process.env.PORT))