var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('parameter query : '+req.query.say);
});

router.get('/create', function(req, res, next) {
//  res.send('fasfsafjslkf')
   res.render('users/create', { title: 'create' });
});

router.post('/create', function(req, res, next) {

res.send(`first name : ${req.body.firstname.toLowerCase()} | last name: ${req.body.lastname.toLowerCase()}`)

});

module.exports = router;
