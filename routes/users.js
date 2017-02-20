var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('isi paramater say is : ' + req.query.say);
});

module.exports = router;
