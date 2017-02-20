var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/form',{title : 'Words Converter', param : req.query});
  // res.send(`${req.query.say} ${req.query.name}`)
});

router.post('/tolowercase',function(req, res, next){
  let result = []
  for(var key in req.body){
    result.push(req.body[key].toLowerCase())
  }
  res.render('users/tolowercase',{title : 'word converter', answer : result});

})



module.exports = router;
