var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.set('Content-Type', 'application/json');
  var object = {
    a: 1,
    b: 2
  };
  eval(locus);
  res.send(JSON.stringify(object, null, 3));
  //res.render('index', { title: 'Express' });
});

module.exports = router;
