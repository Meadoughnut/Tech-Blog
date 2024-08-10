const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      const post = postData.get({ plain: true });

      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }),

  router.post('/', async (req, res) => {
    try {
      const { title, content } = req.body;
      await Post.create({
        title,
        content,
        user_id: req.session.user_id,
      });
      res.redirect('/profile');
    } catch (err) {
      res.status(500).json(err);
    }
  }),

  router.update('/', async (req, res) => {
    try {
      const { title, content } = req.body;
      await Post.update(
        { title, content },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        }
      );
      res.redirect('/profile');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/', async (req, res) => {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      res.redirect('/profile');
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
