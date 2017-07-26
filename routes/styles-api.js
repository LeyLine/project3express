var express = require('express');
var router = express.Router();

const Styles = require('../models/yoga-models');

/* GET Styles listing. */
router.get('/styles', (req, res, next) => {
  Styles.find((err, stylesList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(stylesList);
  });
});

module.exports = router;
