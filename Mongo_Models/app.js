const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const dbConnection = require('./config/db');

const app = express();

/* ---------- Middleware ---------- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ---------- View Engine ---------- */
app.set('view engine', 'ejs');
app.set('views', './views');

/* ---------- DB Connection ---------- */
dbConnection();

/* ---------- Routes ---------- */

// Home → show register page
app.get('/', (req, res) => {
  res.render('register');
});

// Register user
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({
      username,
      email,
      password
    });

    res.send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.send('Error registering user');
  }
});

/* ---------- Server ---------- */
app.listen(3000, () => {
  console.log('Server running on port 3000');
});



