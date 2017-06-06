var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('output', {
      title: '排序结果'
  });
});

module.exports = router;
