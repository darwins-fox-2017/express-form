var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('users', {param1:req.query});
  res.render('users', {param1:req.query.say, param:''});
}); 

router.post('/', function(req, res, next) {
  res.render('users', {param1: 'ANDIKA',param  :req.body.say.toLowerCase()});
});

module.exports = router;