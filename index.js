var express = require('express');   // this pulls in express into index.js file. looks in node_modules folder sense there's no forward slashes next to express. massive function.
var bodyParser = require('body-parser');

var booksCtrl = require('./controllers/books_controller') // a closure is created around the entire file

var app = express(); // assigning return of this function to the variable app.

app.use(bodyParser.json()); // happens on every type of method

app.get('/books/', booksCtrl.index)
app.post('/books', booksCtrl.create)
app.put('/books', booksCtrl.update)
app.delete('/books/:id', booksCtrl.destroy)
// req.params = { id: 2 } req.params is built into express

// starts loop to always listen
var port = 3000;
app.listen(port, function(){
  console.log('listening on port ' + port)
});
