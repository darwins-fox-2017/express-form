var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('user-form', { firstname:  req.query.firstname, lastname: req.query.lastname});
});

router.post('/', function(req, res) {
  var personInfo = req.body;
//   if(!personInfo.firstname || !personInfo.lastname) {
//     res.send(personInfo);
//   } else {
// res.render('resul-convert', {
//
// })
//}
res.render('resul-convert', {firstname : req.body.firstname.toLowerCase(), lastname: req.body.lastname.toLowerCase()});

});



module.exports = router;
