const { body } = require('express-validator');

const router = require('express').Router();
const todos = require('../controller/todos.controller');

router.post('/', body('value').notEmpty(), todos.create);

router.get('/', todos.findAll);

router.get('/completed', todos.findAllCompleted);

router.get('/:id', todos.findOne);

router.put(
  '/:id',
  [body('value').notEmpty(), body('sortOrder').notEmpty(), body('isDone').notEmpty()],
  todos.update
);

router.delete('/:id', todos.delete);

router.delete('/', todos.deleteAll);

module.exports = router;
