const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// // Middleware to log every request
// app.use((req, res, next) => {
//     console.log("Request received");
//     next(); // Important to proceed to next middleware or route handler
// });

// // Routes
// app.get("/", (req, res) => {
//     res.send("You contacted root path");
// });

// app.get("/search", (req, res) => {
//     res.send("i am good boy");
// });

// app.get("/help", (req, res) => {
//     res.send("You contacted help path");
// });

// app.post("/", (req, res) => {
//     res.send("You sent a POST request");
// });

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome to the page of @${username} with ID ${id}`);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(<h1>`You searched for: ${q}`</h1>);
});
