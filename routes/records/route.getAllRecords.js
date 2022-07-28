const express = require('express');
const router = express.Router();
const connection = require('../../database');

router.get('/records', (req, res) => {
  // const { category } = req.query;
  const query = `SELECT * FROM logs`;
  connection.query(query, (err, results, fields) => {
    if (!err) {
      if (results[0]) {
        res.json(results);
      } else {
        res.json([{ id: 1000, calendar: '2000-12-31', method: 'DELETE', data: ['arraryssss'] }]);
      }
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
