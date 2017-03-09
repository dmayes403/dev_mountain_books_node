var books = ['doom', 'grapes of wrath', '1984'];

module.exports = {
  index: function(req, res, next){
    res.send(books);
  },
  create: function(req, res, next){
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
