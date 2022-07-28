const express = require('express');
const router = require('./routes/index.js');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Settings
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(router).listen(PORT, () => {
  console.clear();
  console.log('Api on', PORT);
});
