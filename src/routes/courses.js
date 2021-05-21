const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-trash', courseController.handleTrash);
router.post('/handle-delete', courseController.handleDelete);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);

module.exports = router;