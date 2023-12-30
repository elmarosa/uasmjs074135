const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'static', 'index.html');
  const stream = fs.createReadStream(filePath);
  
  stream.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
  
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});