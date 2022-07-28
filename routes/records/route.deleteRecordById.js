const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.delete('/delete', (req, res) => {
  const { id } = req.body;
  connection.query('DELETE FROM logs WHERE id = ?', [id], (err, results, fields) => {
    if (!err) {
      if (results[0]) {
        res.json({
          res: 'record deleted successfully',
        });
      } else {
        res.json({
          err: 'user not found',
        });
      }
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
