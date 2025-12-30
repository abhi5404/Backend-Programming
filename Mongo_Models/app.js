const express = require('express');
const User = require('./user');
const dbConnection = require('./config/db');

const app = express();
dbConnection();

const createUser = async () => {
  await User.create({
    name: 'Abhijit',
    email: 'abhijit@example.com',
    age: 22
  });
  console.log('User inserted');
};

createUser();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


