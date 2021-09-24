const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const port = 4000;
let counter = 0;

app.use(express.urlencoded());

app.get('/', (req, res) => {
  console.log(`Recived ${++counter}`);``
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/login', (req, res) => {
  const dataFile = path.join(__dirname, 'data/login-details.json');
  if (fs.existsSync(dataFile)) {
    let username = req.body.username;
    let password = req.body.password;
    let data = JSON.parse(fs.readFileSync(dataFile));
    const validate = data.filter(function (user) { 
      if (user.username === username && user.password === pass) {
        return true;
      } else {
        return false; 
      }
    });
      if(validate.length > 0){
        res.send(`WELCOME! ${username}`);
      } else {
        res.send("ERROR : INVALID INPUT");
      }
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

app.listen(port, () => {
  console.log(`I'm listening at http://localhost:${port}`)
})