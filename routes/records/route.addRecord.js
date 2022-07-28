const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.post('/add', (req, res) => {
  console.log(req.body);

  const { name, calendar, method, posts } = req.body;

  connection.query(
    'INSERT INTO logs VALUES(?, ?, ?, ?, ?)',
    [null, name, calendar, method, JSON.stringify(posts)],
    (err, results, fields) => {
      if (!err) {
        res.json({
          res: 'record saved successfully',
        });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
