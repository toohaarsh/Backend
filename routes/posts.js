const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/pinterestbackend")

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  image: {
    type: String,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
