const fs = require('fs');
const Path = require('path');

const dataFilePath = Path.join(__dirname, '../data/posts.json');

const getAllPosts = () =>{
   const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

const createPost = (newPost) =>{
  const posts = getAllPosts();
  posts.push(newPost);
  fs.writeFileSync(dataFilePath, JSON.stringify(posts));
  return posts;
 }

 const updatePost = (id, bod) => {
  posts = getAllPosts();
  let postToUpdate = posts.find((x) => x.id == id);
  const index = posts.indexOf(postToUpdate);
  let updatedPost = Object.assign(postToUpdate, bod);
  posts[index] = updatedPost;
  fs.writeFileSync(dataFilePath, JSON.stringify(posts));
  return posts;
};

const postToDelete = (id) => {
  posts = getAllPosts();
  let postToUpdate = posts.find((x) => x.id === id);
  const index = posts.indexOf(postToUpdate);
  posts.splice(index, 1);
  fs.writeFileSync(dataFilePath, JSON.stringify(posts));
  return posts;
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  postToDelete
}