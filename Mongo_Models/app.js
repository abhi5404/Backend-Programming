const express = require('express');
const User = require('./user');
const dbConnection = require('./config/db');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');

// db connection
dbConnection();

// ---------- ROUTES ----------

// CREATE (Register)
app.post('/register', async (req, res) => {
  const { name, age, email, password } = req.body;

  await User.create({
    name,
    age,
    email,
    password
  });

  res.send('User created');
});

// READ (Get all users)
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE (Update age by name)
app.get('/update', async (req, res) => {
  await User.updateOne(
    { name: "John" },      // condition
    { age: 25 }            // update
  );

  res.send('User updated');
});

// DELETE (Delete by name)
app.get('/delete', async (req, res) => {
  await User.deleteOne({ name: "John" });

  res.send('User deleted');
});

// server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});





