const asyncHandler = require('express-async-handler')

// @desciption Get todos
// @route GET /api/v1/todos 
// @access Private
const getTodos = asyncHandler (async (req, res) => {
        res.status(200).json({
            message: 'Get ToDos'
        })
}); 

// @desciption Set a todo
// @route POST /api/v1/todos 
// @access Private
const setTodo = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field!');

    }

    res.status(200).json({
        message: 'Set ToDo'
    })
});

// @desciption Update todo
// @route PUT /api/v1/todos/:id 
// @access Private
const updateTodo = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Update todo ${req.params.id}`
    })
});

// @desciption Delete todo
// @route DELETE /api/v1/todos/:id 
// @access Private
const deleteTodo = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Delete todo ${req.params.id}`
    })
});


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}