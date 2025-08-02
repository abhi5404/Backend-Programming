const { log } = require('console');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: uuidv4(),
        username:"abhi",
        content:"this is my first post"
    },
    {
        id: uuidv4(),
        username:"sachin",
        content:"this is my second post"
    },
    {
        id: uuidv4(),
        username:"priya",
        content:"this is my third post"
    }
];

app.get('/posts', (req, res) => {
  console.log("GET /posts request received");
  console.log("Current posts:", posts);
  res.render("index.ejs", { posts: posts });
}
);
app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});
app.post('/posts', (req, res) => {
  let{ username, content } = req.body;
    let id = uuidv4();
    // Create a new post object
    posts.push({ id,username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        res.status(404).send("Post not found");
        return;
    }
    res.render("show.ejs", { post: post });
});


app.patch('/posts/:id', (req, res) => {
    console.log("PATCH request received for ID:", req.params.id);
    console.log("Request body:", req.body);
    let { id } = req.params;
    console.log("Searching for post with ID:", id);
    console.log("All posts and their IDs:");
    posts.forEach(p => console.log("Post ID:", p.id, "Type:", typeof p.id));
    let post = posts.find(p => {
        console.log("Comparing", p.id, "with", id, "Result:", p.id === id);
        return p.id === id;
    });
    console.log("Found post:", post);
    if (!post) {
        res.status(404).send("Post not found");
        return;
    }
    post.content = newContent;
    console.log("Updated posts array:", posts);
    res.redirect("/posts");
});


app.get('/posts/:id/edit', (req, res) => {
    console.log("GET /posts/:id/edit request received for ID:", req.params.id);
    let { id } = req.params;
    console.log("All posts:", posts);
    let post = posts.find(p => p.id === id);
    console.log("Found post for editing:", post);
    if (!post) {
        res.status(404).send("Post not found");
        return;
    }
    res.render("edit.ejs", { post: post });
});

app.delete('/posts/:id', (req, res) => {
    console.log("DELETE request received for ID:", req.params.id);
    let { id } = req.params;
    console.log("Searching for post with ID:", id);
    console.log("All posts and their IDs:");
    posts.forEach(p => console.log("Post ID:", p.id, "Type:", typeof p.id));
    console.log("Posts before deletion:", posts);
    posts = posts.filter(p => {
        console.log("Comparing", p.id, "with", id, "Result:", p.id === id);
        return p.id !== id;
    });
    console.log("Posts after deletion:", posts);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`listening on port :${port}`);
});
