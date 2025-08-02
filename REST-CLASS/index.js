const { log } = require('console');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: "1a",
        username:"abhi",
        content:"this is my first post"
    },
    {
        id: "2b",
        username:"sachin",
        content:"this is my second post"
    },
    {
        id: "3c",
        username:"priya",
        content:"this is my third post"
    }
];

app.get('/posts', (req, res) => {
  res.render("index.ejs", { posts: posts });
}
);
app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});
app.post('/posts', (req, res) => {
  let{ username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let post = posts.find(p => p.id === postId);
    if (post) {
        res.render("show.ejs", { post: post });
    } else {
        res.status(404).send("Post not found");
    }
});



app.listen(port, () => {
    console.log(`listening on port :${port}`);
});
