require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use( express.json() )

const { PORT = 3000 } = process.env;

app.use('/api/pokemon', require('./routers/pokemon'))

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});