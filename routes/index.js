var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Page d'accueil" });
});

router.get('/apropos', function(req, res, next) {
  res.render('propos', { title: 'A propos de nous' });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Registration page' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login Page' });
});
module.exports = router;
