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
        username:"abhi",
        content:"this is my first post"
    },
    {
        username:"sachin",
        content:"this is my second post"
    },
    {
        username:"priya",
        content:"this is my third post"
    }
];

app.get('/posts', (req, res) => {
  res.render("index.ejs", { posts: posts });
}
);

app.listen(port, () => {
    console.log(`listening on port :${port}`);
});
