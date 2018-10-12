var express = require('express');
var router = express.Router();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.postgres://xjoyewqbzlefvw:4a048ef38fd0dd9f8f0a6e3d7f0f241c4774b07281ce26df98736737a0ec77bd@ec2-23-21-147-71.compute-1.amazonaws.com:5432/dcae6euhvqn0sl,
  ssl: true
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos a TING 2018' });
});

module.exports = router;

