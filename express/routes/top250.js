var express = require('express');
var router = express.Router();
var getTop250 = require('../../database/getTop250')
/* GET home page. */
router.get('/', function (req, res, next) {
  getTop250(res);
});

module.exports = router;
