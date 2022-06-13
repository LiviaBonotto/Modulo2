
const express = require("express"); 
const app = express();

const hostname = "127.0.0.1";
const port = 5000;

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curriculo_livia.db";

app.use(express.static("../frontend/"));

app.use(express.json());


// ENDPOINTS

// mostra as experiencias
app.get('/experiencias', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM experiencias ORDER BY title';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json({ experiencias: rows});
  });
  db.close();
});


// mostra as formações 
app.get('/formacao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM formacao ORDER BY title';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json({formacao: rows});
  });
  db.close();
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
