var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log('Katakan ' + req.query.say);
  res.render('index', { parameter:  req.query.say});
});

module.exports = router;
