const { createTask,fetchAllTasks,updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

// testing api
// router.get('/',(req,res) => {
//     res.send('All tasks')
// });  

// to get all tasks
router.get('/', fetchAllTasks);

// to create task => post method
router.post('/',createTask);

// to update task => post method
router.put('/:id',updateTaskById);

// to delete task => post method
router.delete('/:id',deleteTaskById);


module.exports = router;