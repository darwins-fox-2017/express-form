var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('isi paramater say is : ' + req.query.say);

});

router.get('/create', function(req, res, next){
  res.render('users/create', { title: 'Create' });

})

router.post('/create', function(req, res, next){
  res.send('Your input is : firstname : ' + req.body.firstname + ' lastname : ' + req.body.lastname)
})

module.exports = router;
