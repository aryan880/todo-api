const todos = require("../controller/todos.controller");

var router = require("express").Router();

router.post("/", todos.create);

router.get("/", todos.findAll);

router.get("/completed", todos.findAllCompleted);

router.get("/:id", todos.findOne);

router.put("/:id", todos.update);

router.delete("/:id", todos.delete);

router.delete("/", todos.deleteAll);

module.exports = router;
