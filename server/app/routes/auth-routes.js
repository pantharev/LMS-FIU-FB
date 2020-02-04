const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.send('login');
    console.log("HELLO LOGIN");
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with facebook
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/redirect', (req, res) => {
    res.send('callback URL');
});


module.exports = router;
