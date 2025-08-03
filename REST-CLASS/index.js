const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: uuidv4(), username: "abhi", content: "this is my first post" },
    { id: uuidv4(), username: "sachin", content: "this is my second post" },
    { id: uuidv4(), username: "priya", content: "this is my third post" }
];

// INDEX ROUTE
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

// NEW POST FORM
app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

// CREATE POST
app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect('/posts');
});

// SHOW ROUTE
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

// EDIT FORM
app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post });
});

// UPDATE POST (PATCH)
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let { content: newContent } = req.body;

    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = newContent;
    res.redirect("/posts");
});

// DELETE POST
app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

