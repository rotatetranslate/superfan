var express = require('express'),
    router  = new express.Router();

// Require controllers.
// var userController = require('../controllers/users');
var instagrammerController = require('../controllers/instagrammers');
var UsersController = require('../controllers/users');
var authController = require('../controllers/oauth');

// root path:
// router.get('/', pagesController.welcome);

//||||||||||||||||||||||||||--
// USERS CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/user',     UsersController.index);

//||||||||||||||||||||||||||--
// INSTAGRAMMER CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/auth/instagram/find', instagrammerController.instagrammerSearch);
//||||||||||||||||||||||||||--
// INSTAGRAM GUEST OAUTH SERVICES
//||||||||||||||||||||||||||--
router.post('/auth/instagram', authController.instagram);


module.exports = router;
