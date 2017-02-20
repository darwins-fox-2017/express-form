var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { parameter: 'Express', alert : 'What do you want?' });
});


module.exports = router;
