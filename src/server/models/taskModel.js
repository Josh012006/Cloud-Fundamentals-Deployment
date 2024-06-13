import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        isCompleted: Boolean
    }
);


const taskModel = mongoose.models.task || mongoose.model('task', taskSchema);


export default taskModel;