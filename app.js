const express = require('express');
const path = require('path');
const router = express.Router();
const t = express();

t.use(express.urlencoded({
    extended: true
  }));

const port = 80;

let id = 'temp@temp.com';
let password = 'password';

t.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/temp.html'));
});

t.post('/', (req, res) => {
    
    if(req.body.id == id && req.body.password == password){
        res.redirect('/home');
    }
    else{
        res.redirect('/');
    }
    
});

t.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
});

t.listen(port, () => {
    console.log(`app is running on port http://localhost:${port}`);
});