const express = require('express');
const userModel = require('./user');
const dbConnection = require('./config/db');

const app = express();
dbConnection();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

