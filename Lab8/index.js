const express = require('express');
require('dotenv').config()

const app = express();
app.use( express.json() );

app.use('/api/fibonacci', require('./router/fibonacci'))

app.listen(process.env.PORT, () => console.log('server on port ', process.env.PORT));
