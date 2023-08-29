const express = require('express')
const { getTodos, newTodo, deleteTodo, completeTodo, changeTodo } = require('../controllers/todoController')
const router = express.Router()

router.get('/todos', getTodos)
router.post('/todos/new', newTodo)
router.delete('/todos/delete/:id', deleteTodo)
router.post('/todos/complete/:id', completeTodo)
router.put('/todos/update/:id', changeTodo)

module.exports = router