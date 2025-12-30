const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parsing middleware for form submissions
app.use(express.urlencoded({ extended: true }));

// Simple request logger to help debugging duplicate requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

const port = process.env.PORT || 3000; 

const server = app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Kill the other process or set PORT to a different value.`);
        process.exit(1);
    }
    throw err;
});

// // Custom Middleware 
// app.use((req, res, next) => {
//     console.log("Request received");
//     next(); // Important to proceed to next middleware or route handler
// });

// // Built-in Middleware using morgan
// const morgan = require('morgan');
// app.use(morgan('tiny'));

// // middleware in specific routes
// app.get("/special", (req, res, next) => {
//     console.log("Special request");
//     next();
// }, (req, res) => {
//     res.send("You reached the special route");
// });


// Routes
app.get("/", (req, res) => {
    res.send("You contacted root path");
});

app.get("/search", (req, res) => {
    res.send("i am good boy");
});

app.get("/help", (req, res) => {
    res.send("You contacted help path");
});

//require catme
app.get("/cat", (req, res) => {
    var catMe = require('cat-me');
    res.send(catMe());
});


// app.post("/", (req, res) => {
//     res.send("You sent a POST request");
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     res.send(`Welcome to the page of @${username} with ID ${id}`);
// });

// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     res.send(<h1>`You searched for: ${q}`</h1>);
// });


// require ejs form run in localhost:3000
app.get('/ejs', (req, res) => {
    res.render('form');
    console.log(req.query);
});

app.post('/submit', (req, res) => {
    console.log('Form body:', req.body);
 res.send('Form received');
});




