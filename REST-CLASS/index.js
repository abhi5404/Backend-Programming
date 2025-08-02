const { log } = require('console');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

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
  res.render("show.ejs", { post: post });
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
     let post = posts.find(p => p.id === id);
     post.content = newContent;
    // Update the post content

    console.log(post);
    res.send("This is a patch request");
});



app.listen(port, () => {
    console.log(`listening on port :${port}`);
});
