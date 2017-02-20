var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let say = req.query.say
  let result = req.query.result
  res.render('users',{title: 'Express',answer:''});
});

router.post('/', function(req, res, next){
  let inputUser = req.body.result
  if (inputUser.trim().split(' ').length >= 2) {
    res.render('users',{answer:req.body.result.toLowerCase()})
  }else {
    res.render('users',{answer:"input kurang dari 2 kata"});
  }
})

module.exports = router;
