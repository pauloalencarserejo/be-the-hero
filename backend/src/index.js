const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//vai pegar o json e transformar em um objeto em javascript
app.use(express.json());
app.use(routes);

app.listen(3333);