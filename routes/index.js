var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  let routerName = '';
  let routerAge = '';
  res.render('./index/profile', { title: 'Express', name: name, age: age });
});

// saat form di klik, router akan masuk ke sini
router.post('/profile', function(req, res, next) {
  let routerName = req.body.name;
  let routerAge = req.body.age;
  res.render('./index/profile', { title: 'Express', name: name, age: age });
});




module.exports = router;
