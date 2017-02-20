var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', {title : 'Test', text : ''});
});
router.post('/', function(req, res, next) {
  res.render('form', {title : 'Test', text: req.body.text.toLowerCase()});
});

module.exports = router;
