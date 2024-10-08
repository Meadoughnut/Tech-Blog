const router = require('express').Router();
const { Comment, User } = require('../../models');

const commentController = {
  async addComment(req, res) {
    try {
      const { comment_text } = req.body;
      await Comment.create({
        comment_text,
        post_id: req.params.postId,
        user_id: req.session.user_id,
      });
      res.redirect(`/post/${req.params.postId}`);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getComments(req, res) {  // Moved the route handler function here
    try {
      const commentData = await Comment.findAll({
        where: {
          post_id: req.params.id,  // Corrected this line from 'postId' to 'id'
        },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const comments = commentData.map((comment) => comment.get({ plain: true }));
  
      res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

// Define the route handlers directly on the router
router.get('/post/:id', commentController.getComments);

module.exports = router;
