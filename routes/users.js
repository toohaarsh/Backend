const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/pinterestbackend")
const plm = require("passport-local-mongoose")

const userSchema = new Schema({
  username: {
    type: String,


  },
  fullname: {
    type: String,

  },

  password: {
    type: String,

  },
  email: {
    type: String,
    required: true,

  },
  profileImage:{
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Post'
    }
  ]
});

userSchema.plugin(plm)
module.exports = mongoose.model('User', userSchema);

