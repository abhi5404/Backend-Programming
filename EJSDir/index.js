const express = require("express");
const path = require("path");
const data = require("./data.json"); // Load data.json

const app = express();
const port = 8080;

// Set EJS as the view engine and define views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (optional, only needed if you use /public)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.render("home");
});

// Dynamic route for usernames like /cats or /dogs
app.get("/:username", (req, res) => {
    const { username } = req.params;
    const userData = data[username];

    if (userData) {
        res.render("instagram", { user: userData }); // ✅ FIX: use "instagram" not "profile"
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
