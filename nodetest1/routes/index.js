var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Hello World route and function*/
router.get('/helloworld', function (request, response) {
	response.render('helloworld', { title: 'Hello World!' });
});

module.exports = router;
