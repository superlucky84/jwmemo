var express = require('express');
var router = express.Router();

/**
 * INDEX PAGE
 */
router.get('/', function (req, res, next) {
    res.render('index',{});
});

module.exports = router;
