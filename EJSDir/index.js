const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "/views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.render("home"); // Renders views/home.ejs
});

// Simple hello route
app.get("/hello", (req, res) => {
    res.send("Hello");
});

// Dynamic user profile route
app.get("/:username", (req, res) => {
    const { username } = req.params;

    // Sample followers array
    const followers = ["john_doe", "jane_smith", "elon_musk"];

    // Render profile.ejs and pass data
    res.render("profile", { username, followers });
});

// 404 Handler - for undefined routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Error handler - to catch unexpected issues
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
