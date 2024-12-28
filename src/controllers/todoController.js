const Todo = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    if (!todo) {
      return res.status(400).json({ message: "Unable to create To-Do" });
    }
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos || todos.length === 0) {
      return res.status(404).json({ message: "No To-Dos found" });
    }
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ message: "To-Do not found for update" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "To-Do not found for deletion" });
    }
    res.status(200).json({ message: "To-Do deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
