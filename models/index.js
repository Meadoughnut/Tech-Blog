const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
});

module.exports = { User, Post, Comment };
