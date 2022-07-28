const express = require('express');
const router = express.Router();
router.use(express.json());

const connection = require('../../database/index');

router.put('/update', (req, res) => {
  const { calendar, method, id } = req.body;
  connection.query(
    'UPDATE logs SET calendar = ?, method = ? WHERE id = ?',
    [calendar, method, id],
    (err, results, fields) => {
      if (!err) {
        res.json({
          res: 'record updated successfully',
        });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
