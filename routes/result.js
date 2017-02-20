var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send('username :  ' + req.body.username)
  res.render('result', { username : req.body.username, fullname: req.body.fullname, title: "Form Testing"})
})

module.exports = router;
