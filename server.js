const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// iniciando app
const app = express();
// envia dados para aplicação no formato de json
app.use(express.json());
app.use(cors());

// iniciando database
mongoose.connect(
    "mongodb://localhost:27017/kubebuilder-api",
    { useNewUrlParser: true }
);
//load all models
requireDir('./src/models');

// rotas
app.use('/api', require("./src/routes"));

app.listen('3001');
console.log('Listen on port 3001');