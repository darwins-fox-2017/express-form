var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource : ' + req.query.say.toLowerCase());
  // http://localhost:3000/users?say=hello
});

router.post('/', function(req, res, next){
  res.send('Your First Name is : ' + req.body.firstname.toLowerCase() + ' Last Name : ' + req.body.lastname.toLowerCase())
})


module.exports = router;
