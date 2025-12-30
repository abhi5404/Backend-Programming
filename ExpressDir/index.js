const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// Custom Middleware 
app.use((req, res, next) => {
    console.log("Request received");
    next(); // Important to proceed to next middleware or route handler
});

// Built-in Middleware using morgan
const morgan = require('morgan');
app.use(morgan('tiny'));

// middleware in specific routes
app.get("/special", (req, res, next) => {
    console.log("Special request");
    next();
}, (req, res) => {
    res.send("You reached the special route");
});


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
