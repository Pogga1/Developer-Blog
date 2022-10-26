const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["title", "content"],
      include: [
        {model: Comment,
        attributes:[
            "id",
            "comment_text",
            "post_id",
            "user_id"
        ]
        }],
        inlcude: {
            model: User,
            attributes: [
                "username"
            ]
        }
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findOne({
        where: {id: req.id},
        attributes: ["title", "content"],
        inlcude: {
            model: User,
            attributes: [
                "username"
            ]
        },
        include: [
          {model: Comment,
          attributes:[
              "id",
              "comment_text",
              "post_id",
              "user_id"
          ]
          }],
      });
      if (!postData){
        res.status(404).json({message : "this post does not exist"})
      }
  
      const posts = postData.get({ plain: true });
  
      res.render('single-post', {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post-comment/', async (req, res) => {
    try {
      const commentData = await Post.findOne({
        where: {id: req.id},
        attributes: ["title", "content"],
        inlcude: {
            model: User,
            attributes: [
                "username"
            ]
        },
        include: [
          {model: Comment,
          attributes:[
              "id",
              "comment_text",
              "post_id",
              "user_id"
          ]
          }],
      });
      if (!postData){
        res.status(404).json({message : "this post does not exist"})
      }
  
      const posts = postData.get({ plain: true });
  
      res.render('post-comments', {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  
module.exports = router;
