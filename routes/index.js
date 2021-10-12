var express = require("express");
var router = express.Router();
var sql = require("../models/db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/todos", function (req, res, next) {
  sql.query("SELECT * FROM todos", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
    console.log(results);
  });
});

router.get("/todos/:id", function (req, res, next) {
  sql.query(
    `SELECT * FROM todos WHERE id = ${req.params.id}`,
    function (error, results, fields) {
      res.send(results);
      if (error) throw error;
      console.log(results);
    }
  );
});

router.put("/todos/:id", function (req, res, next) {
  sql.query(
    `UPDATE todos SET id = '1234',isDone = false, value='abcdefg', sortOrder='123' WHERE  id = ${req.params.id}`,
    function (error, results, fields) {
      res.send(results);
      if (error) throw error;
      console.log(results);
    } 
  );
});

router.delete("/todos/:id", function (req, res, next) {
  sql.query(
    `DELETE FROM todos WHERE id = ${req.params.id}`,
    function (error, results, fields) {
      res.send(results);
      if (error) throw error;
      console.log(results);
    }
  );
});

module.exports = router;
