var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  db.query(
    `SELECT id, code, name, icon, members, description from servers`,
    (err, result) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.send(result.rows);
      }
    }
  );
});

module.exports = router;
