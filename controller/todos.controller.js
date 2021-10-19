const { validationResult } = require('express-validator');
const db = require('../models');
const Todos = db.todos;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const todo = {
    value: req.body.value,
    isDone: req.body.isDone,
    sortOrder: req.body.sortOrder
  };

  Todos.create(todo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tutorial.'
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Todos.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.'
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Todos.findOne({ where: { id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find todo with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving todo with id=${id} ,${err}`
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id } = req.params;

  Todos.update(req.body, {
    where: { id }
  })
    .then((num) => {
      if (num[0] === 1) {
        res.send({
          message: 'Todos was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Tutorial with id=${id},${err}`
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  Todos.destroy({
    where: { id }
  })
    .then((num) => {
      console.log(num);
      if (num === 1) {
        res.send({
          message: 'Todo was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Todo with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Todo with id=${id}`
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Todos.destroy({
    where: {},
    truncate: false
  })
    .then((nums) => {
      res.send({ message: `All todos were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all todos.'
      });
    });
};

// Find all published Tutorials
exports.findAllCompleted = (req, res) => {
  Todos.findAll({ where: { isDone: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.'
      });
    });
};
