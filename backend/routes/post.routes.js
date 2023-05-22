const express = require('express');
const { setPosts, getPosts, editPost } = require('../controllers/post.controller');
const router = express.Router(); 

router.get("/", getPosts);
router.post("/", setPosts);
router.put('/:id', editPost);

router.delete('/:id', (req, res) => {
    res.json({ message: "post supprimé " + req.params.id});
});

router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "Post liké: id: " + req.params.id});
});

router.patch("/dislike-post/:id", (req, res) => {
    res.json({ message: "Post disliké: id: " + req.params.id});
});

module.exports = router;