var books = require('../models/books.js') // pull in books array from book.js

module.exports = {
  index: function(req, res, next){
      if(req.query.rating){
      var rating = parseInt(req.query.rating);
      const ratedBooks = books.filter((book) => book.rating === rating)
      res.send(ratedBooks);
    } else {
      console.log(books)
      res.send(books)
    }
  },
  build: function(req, res, next){
    books.push(req.body.name);
    res.send(books);
  },
  update: function(req, res, next){
    var newPosition = req.body.position;
    books[newPosition] = req.body.newName;
    res.send(books);
  },
  destroy: function(req, res, next){
    books.splice(req.params.id, 1);
    res.send(books);
  }
};
