const blogs = require('./blogs.json');
const users = require('./users.json');


module.exports = () => ({
  users: users,
  blogs: blogs
  
});