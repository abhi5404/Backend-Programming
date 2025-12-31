const express = require('express');
const User = require('./user');
const dbConnection = require('./config/db');

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');

// db connect
dbConnection();

// routes
app.get('/', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body); // 🔴 VERY IMPORTANT (debug)

  await User.create({
    name: name,
    age: age,
    email: email,
    password: password
  });

  res.send('User registered');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get('/update',(req,res)=>{
  userModel.findupdateOne({name:"John"},{age:25},(err)=>{
    if(!err){
      res.send("updated successfully");
} else{
      res.send(err);
    }
  });
});

// server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});




