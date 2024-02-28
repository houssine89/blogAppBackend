const postModel= require('../models/post');

const getAllPosts = (req, res) =>{
  const posts = postModel.getAllPosts();
  res.send(posts);
}

const createPost = (req, res) =>{
  const post = req.body;
  const newPost = postModel.createPost(post);
  res.status(201).send(newPost);
}

const patchPost = (req, res) =>{
  let bod = req.body;
  let id = req.params.id;
  let post = postModel.updatePost(id,bod);
  res.status(201).send(post);
}

const postToDelete = (req, res) =>{
  let id = req.params.id;
  let post = postModel.postToDelete(id);
  res.status(201).send(post);
}



module.exports = {
  getAllPosts,
  createPost,
  patchPost,
  postToDelete
}
