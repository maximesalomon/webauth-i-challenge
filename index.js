// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db');
const parser = express.json();

server.use(parser);

// ENDPOINTS

// TO DO

// SERVER LISTENING

server.listen(7000, () => console.log('API running on port 7000'));