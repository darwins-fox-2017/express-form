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
    res.render('index', {title: 'HACKTIV8 FORM', answer: req.query.say.toLowerCase()})
  }
})

router.get('/', function(req, res, next) {
  var say    = req.query.say;
  var result = req.query.result;
  res.render('index', {title: 'HACKTIV8 FORM', answer: ''})
})

router.post('/', function(req, res, next){
  var value = req.body.result;
  if (value.trim().split(' ').length >= 2) {
    res.render('index',{title: 'HACKTIV8 FORM', answer:req.body.result.toLowerCase()});
  }else {
    res.render('index',{title: 'HACKTIV8 FORM', answer:"Input minimal 2 kata"});
  }
})

module.exports = router;
