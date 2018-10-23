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

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_tableprueba');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;

