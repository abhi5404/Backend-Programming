const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));  // Ensure views directory is set

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");  // No need for .ejs
});
app.get("/hello", (req, res) => {
    res.send("hello");  // No need for .ejs
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instagram", { username }); // Removed .ejs from render call
});

// Handle missing templates gracefully
app.use((err, req, res, next) => {
    if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
