var express = require('express');   // this pulls in express into index.js file. looks in node_modules folder sense there's no forward slashes next to express. massive function.
var bodyParser = require('body-parser');

var booksCtrl = require('./controllers/books_controller') // a closure is created around the entire file

var app = express(); // assigning return of this function to the variable app.

// 1.
app.use(bodyParser.json()); // happens on every type of method

var isAdmin = function(req, res, next){
  if(req.query.admin === 'true'){
    next()
  } else {
    res.status(401).send(`da na na nu, can't touch this.`)
  }
}

//
app.get('/books/', booksCtrl.index)
app.post('/books', booksCtrl.build)
app.put('/books', booksCtrl.update)
app.delete('/books/:id', isAdmin, booksCtrl.destroy)
// req.params = { id: 2 } req.params is built into express

// starts loop to always listen
var port = 3000;
app.listen(port, function(){
  console.log('listening on port ' + port)
});

//GET /books?rating=8

// req.query = {
//   rating: 8
// };
