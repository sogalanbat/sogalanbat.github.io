// server.js
// where your node app starts

// init project
var express = require('express');
const router = express.Router();
const pug = require('pug');
const path = require('path');


var app = express();
app.set('view engine', 'pug');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html


// ADMIN FUNCTION AND PASSWORD:
router.get('/admin', function(req, res) {
    res.render("signin");
});

const username = process.env.username;
const password = process.env.password;


router.get('/', function(req, res) {
    res.render("index");
});

app.post('/admin', (req,res) =>{
  console.log(req.body);
  
  if(req.body.user === username){
    if(req.body.pswd === password){
      res.render("admin");
      console.log('bien!!');
    }
  }
  else{
    console.log('mal');
    res.redirect('/');
  }
})




app.use('/', router);

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
