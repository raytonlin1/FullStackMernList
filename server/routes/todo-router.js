const express = require('express')

const todoCtrl = require('../controllers/todo-ctrl')

const router = express.Router()

router.post('/', todoCtrl.createItem)
router.get('/', todoCtrl.getTodos)
router.put('/:id', todoCtrl.editTodos)
router.delete('/:id', todoCtrl.deleteTodos)

module.exports = router