'use strict';


var mongoose = require('mongoose'),
  Piece = mongoose.model('Pieces');

exports.list_all_pieces = function(req, res) {
  Piece.find({}, function(err, piece) {
    if (err)
      res.send(err);
    res.json(piece);
  });
};




exports.create_piece = function(req, res) {
  var new_pc = new Piece(req.body);
  new_pc.save(function(err, pc) {
    if (err)
      res.send(err);
    res.json(pc);
  });
};


exports.read_piece = function(req, res) {
  Piece.findById(req.params.pieceID, function(err, pc) {
    if (err)
      res.send(err);
    res.json(pc);
  });
};


exports.update_piece = function(req, res) {
    Piece.findOneAndUpdate({_id: req.params.pieceID}, req.body, {new: true}, function(err, pc) {
    if (err)
      res.send(err);
    res.json(pc);
  });
};


exports.delete_a_piece = function(req, res) {


    Piece.remove({
    _id: req.params.pieceID
  }, function(err, pc) {
    if (err)
      res.send(err);
    res.json({ message: 'Piece successfully deleted' });
  });
};