var express = require('express');
var router = express.Router();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://zftczgceyrytlw:3a576b429e071d03d8bdcf7657451721772ddbd2eb146dbe7d02bc89c933497f@ec2-107-20-211-10.compute-1.amazonaws.com:5432/d62f58tjfmnevd,
  ssl: true
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos a TING 2018' });
});

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM periodicos');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;

