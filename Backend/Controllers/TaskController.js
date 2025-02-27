
const TaskModel = require("../Models/TaskModel");

const createTask = async(req,res)=>{

    const data = req.body;
    try{
        const model = new TaskModel(data);
        await model.save();
        res.status(201)
            .json({ message: 'Task is created', success: true });
    }catch(err){

        res.status(500).json({ message: 'Failed to create task', sucess: false});
    }
}

const fetchAllTasks = async(req,res)=>{
    try{
        const data = await TaskModel.find({});
        await model.save();
        res.status(200)
          .json({ message: 'All Tasks', success: true, data });
    }catch(err){

        res.status(500).json({ message: 'Failed to get all tasks', sucess: false});
    }
}

const updateTaskById = async(req,res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body}};
        await TaskModel.findByIdAndUpdate(id,obj);
       // await model.save();
        res.status(200)
          .json({ message: 'Task Updated', success: true });
    }catch(err){
        res.status(500).json({ message: 'Failed to update task', sucess: false});
    }
}
const deleteTaskById = async(req,res)=>{
    try{
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
          .json({ message: 'Task is deleted', success: true});
    }catch(err){
        res.status(500).json({ message: 'Failed to delete task', sucess: false});
    }
}

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById, 
    deleteTaskById
}