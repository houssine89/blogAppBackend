const router = require('express').Router();

const middleware = require('../Middlewares/middleware');

const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);

router.post('/', postController.createPost);

router.patch('/:id', postController.patchPost);

router.delete('/:id', postController.postToDelete);

module.exports = router;






