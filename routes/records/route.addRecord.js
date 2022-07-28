const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.post('/add', (req, res) => {
  // const body = JSON.parse(req.body);
  console.log(req.body);

  const { name, calendar, method, posts } = req.body;
  console.log(calendar);
  console.log(method);
  console.log(posts);

  console.log('se llamo add');

  // console.log(req.body);
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
