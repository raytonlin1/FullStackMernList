const express = require('express')

const todoCtrl = require('../controllers/todo-ctrl')
//const Todo = require('../models/todo-model')
const router = express.Router()

router.post('/', todoCtrl.createItem)
router.get('/', todoCtrl.getTodos)
router.put('/:id/update', todoCtrl.editTodos)
router.delete('/:id', todoCtrl.deleteTodos)
/* 
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  

  router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
*/
module.exports = router