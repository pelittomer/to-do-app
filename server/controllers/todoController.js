const Todo = require('../models/Todo.js')

const newTodo = (req, res) => {
    const todo = new Todo({
        text: req.body.todo
    })
    todo.save();
    res.json(todo);
}

const getTodos = async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
}
const deleteTodo = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
}
const completeTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.complete = !todo.complete
    todo.save()
    res.json(todo)
}
const changeTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.text = req.body.newTodo;
    todo.save()
    res.json(todo)
}
module.exports = {
    newTodo,
    getTodos,
    deleteTodo,
    completeTodo,
    changeTodo
}