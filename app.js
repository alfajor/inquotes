const express = require('express');
const path = require('path');
const host = '127.0.0.1';
const port = 4000;

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// run server
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
