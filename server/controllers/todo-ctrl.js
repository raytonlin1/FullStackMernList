const Todo = require('../models/todo-model')

//POST request, creates a new Todo item
createItem = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const todo = new Todo(body)

    if(!todo){
        return res.status(400).json({ success: false, error: err })
    }

    todo.save().then(() => {
        return res.status(200).json({
            success: true,
            id: todo._id,
            message: 'todo item created',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'todo item not created',
        })
    })
}

//GET request, gets the todo items. Can add getting a single item in the future by id
getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: todos })
    }).catch(err => console.log(err))
}

//PUT request, edits the Todo item
editTodos = async (req, res) => {
    const newTodo = new Todo({_id: req.params.id,todo: req.body.todo, name: req.body.name})
    Todo.updateOne({_id: req.params.id},newTodo)
        .then(() => {res.status(201).json({message: 'Update complete'})})
        .catch((error)=>{res.status(400).json({error: error})})
    }

//DELETE request, deletes the todo item with the given id in the request
deleteTodos = async (req, res) => {
    console.log(req.params.id)
    await Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json("Todo deleted "))
        .catch(err => res.status(400).json("Error: " + err))
}

module.exports = {createItem, getTodos, editTodos, deleteTodos}
