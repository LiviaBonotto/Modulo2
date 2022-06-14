
const express = require("express"); 
const app = express();

const hostname = "127.0.0.1";
const port = 5000;

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curriculo_livia.db";

app.use(express.static("../frontend/"));

app.use(express.json());


/***** ENDPOINTS ******/

///// CRUD EXPERIENCIAS /////

// CREATE experiências
app.post('/experienciasCreate', urlencodedParser, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  sql = "INSERT INTO curriculo_livia (title, info, specs) VALUES (?, ?, ?, ?)";
  
  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.title);
  params.push(req.body.info);
  params.push(req.body.specs);

  // executa a lista
  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();
  res.end();
});


// READ experiências
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


// UPDATE experiências
app.post('/experienciasUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  var db = new sqlite3.Database(DBPATH); 
  sql = "UPDATE curriculo_livia SET title = ?, info = ?, specs = ?";

  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.title)
  params.push(req.body.info)
  params.push(req.body.specs)

  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();

});


// DELETE experiências
app.post('/experienciasDelete', urlencodedParser, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH); 
  sql = "DELETE FROM curriculo_livia WHERE id = ?";

  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.id);

  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();
  
});



////// CRUD FORMACOES //////

// CREATE formação
app.post('/formacaoCreate', urlencodedParser, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  sql = "INSERT INTO curriculo_livia (title, info, specs) VALUES (?, ?, ?, ?)";
  
  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.title);
  params.push(req.body.info);
  params.push(req.body.specs);

  // executa a lista
  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();
  res.end();
});


// READ formação
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


// UPDATE formação
app.post('/formacaoUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  var db = new sqlite3.Database(DBPATH); 
  sql = "UPDATE curriculo_livia SET title = ?, info = ?, specs = ?";

  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.title)
  params.push(req.body.info)
  params.push(req.body.specs)

  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();

});


// DELETE formação
app.post('/formacaoDelete', urlencodedParser, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH); 
  sql = "DELETE FROM curriculo_livia WHERE id = ?";

  // adiciona os parâmetros na lista (substitui o ?)
  let params = [];
  params.push(req.body.id);

  db.all(sql, params, (err, rows) => {
    response.statusCode = 200;
    response.json(rows);
  });
  db.close();
  
});



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
