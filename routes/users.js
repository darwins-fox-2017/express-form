var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  if (req.query.say == undefined) {
    res.render('index', {title: 'HACKTIV8 FORM', answer: req.query.say})
  } else {
    res.render('index', {title: 'HACKTIV8 FORM', answer: req.query.say, result: req.query.say.toLowerCase()})
  }
})

module.exports = router;
