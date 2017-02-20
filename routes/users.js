var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let name = req.query.name;  // name = nama parameter di url
  let age = req.query.age;    // age = nama parameter di url
  console.log(name);
  console.log(age);
  console.log(`ini hasil query ${JSON.stringify(req.query)}`);
  // http://localhost:3000/users?name=panda&age=24  <= query string
  res.render('users', { name: "" });
});

router.post('/', function(req, res, next) {
  let temp = req.body.say;
  let word = temp.toLowerCase()
  res.render('users', { name: word });
});

router.get('/:userId/books/:bookId', function (req, res) {
  //res.send(req.params)
  let userId = req.params.userId;  // name = nama parameter di url
  let bookId = req.params.bookId;    // age = nama parameter di url
  console.log(userId);
  console.log(bookId);
})

module.exports = router;

// klo pakai '=' => itu query string
// klo pakai ':' => itu parameter
