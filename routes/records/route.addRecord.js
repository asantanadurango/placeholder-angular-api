const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.post('/add', (req, res) => {
  const { calendar, method, data } = req.body;
  connection.query('INSERT INTO logs VALUES(?, ?, ?, ?, ?)', [null, calendar, method, data], (err, results, fields) => {
    if (!err) {
      res.json({
        res: 'record saved successfully',
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
