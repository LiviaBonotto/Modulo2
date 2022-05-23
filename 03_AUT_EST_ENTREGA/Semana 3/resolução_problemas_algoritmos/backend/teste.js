
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3022;
app.use(express.static("./resolução_problemas_algoritmos/"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});