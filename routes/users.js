var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express Synchronous Form', say: req.query });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: "FORM", respond: req.body.input });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: "FORM", respond: req.body.input.toLowerCase()});
});


module.exports = router;
