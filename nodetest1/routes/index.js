var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//this route should console log our 5 variables that are declared in main.js
router.post('/', function(req, res) {
  console.log("hi");
  console.log(req.formData.storeNumber);
});

module.exports = router;
