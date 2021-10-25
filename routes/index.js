const { body } = require('express-validator');

const router = require('express').Router();
const todos = require('../controller/todos.controller');

router.post('/', body('value').notEmpty(), todos.create);

router.get('/', todos.findAll);

router.get('/completed', todos.findAllCompleted);

router.get('/:id', todos.findOne);

router.patch('/updateValue/:id', [body('value').notEmpty()], todos.update);

router.patch('/updateCheckBox/:id', [body('isDone').notEmpty()], todos.updateCheckBox);

router.patch('/updateSortOrder/:id', [body('sortOrder').notEmpty()], todos.updateSortOrder);

router.delete('/:id', todos.delete);

router.delete('/', todos.deleteAll);

module.exports = router;
