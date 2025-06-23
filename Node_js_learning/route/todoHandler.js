const express = require('express');
const router = express.Router();

//get all the todos
router.get('/', async(req, res) => {
    res.send('Get all todos');
});

//get a todo by id
router.get('/:id', async(req, res) => {
    const todoId = req.params.id;
    res.send(`Get todo with id: ${todoId}`);
});

//post a new todo
router.post('/', async(req, res) => {
    const newTodo = req.body;
    res.status(201).send(`New todo created: ${JSON.stringify(newTodo)}`);
});

//post multiple todos
router.post('/bulk', async(req, res) => {
    const todos = req.body;
    res.status(201).send(`Multiple todos created: ${JSON.stringify(todos)}`);
});

//put to update a todo by id
router.put('/:id', async(req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
    res.send(`Todo with id ${todoId} updated: ${JSON.stringify(updatedTodo)}`);
});

//delete a todo by id
router.delete('/:id', async(req, res) => {
    const todoId = req.params.id;
    res.send(`Todo with id ${todoId} deleted`);
});

module.exports = router;