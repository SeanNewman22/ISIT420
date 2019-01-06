var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/', function(req, res) {
  
});

module.exports = router;
