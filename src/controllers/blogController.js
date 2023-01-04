const path = require('path');

const blogController = {
    blog: (req,res)=> res.render(path.resolve(__dirname,'../views/blog.ejs'))
};

module.exports = blogController;