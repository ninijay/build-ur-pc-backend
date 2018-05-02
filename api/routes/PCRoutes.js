'use strict';
module.exports = function(app) {
  var pieces = require('../controllers/PCController');

  // todoList Routes
  app.route('/pieces')
    .get(pieces.list_all_pieces)
    .post(pieces.create_piece);


  app.route('/pieces/:pieceID')
    .get(pieces.read_piece)
    .put(pieces.update_piece)
    .delete(pieces.delete_a_piece);
};