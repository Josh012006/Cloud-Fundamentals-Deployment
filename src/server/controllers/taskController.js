import connectDB from "../config/db.js";
import taskModel from "../models/taskModel.js";


export const fetchTasks = async  (req, res) => {
    try {

        await connectDB();

        const result = await taskModel.find({});

        if(result) {
            res.status(200).json(result);
        }
        else {
            console.log("An error occured while searching tasks!");
            res.status(500).json({message: "An error occured while searching tasks!"});
        }
    } catch (error) {
        console.log("An error occured while searching tasks!");
        res.status(500).json({message: "An error occured while searching tasks! " + error});
    }
}

export const markAsCompleted = async (req, res) => {
    try {
        const id = req.params.id;

        await connectDB();

        const result = await taskModel.findByIdAndUpdate(id, {isCompleted: true}, {new: true});

        if(result) {
            res.status(200).json(result);
        }
        else {
            console.log("An error occured while marking task as completed!");
            res.status(500).json({message: "An error occured while searching tasks!"});
        }
    } catch (error) {
        console.log("An error occured while marking task as completed!");
        res.status(500).json({message: "An error occured while searching tasks! " + error});
    }
}


export const addTask = async (req, res) => {
    try {
        console.log(req.body);

        const { name, description } = req.body;

        await connectDB();

        const doc = await new taskModel({
            name,
            description,
            isCompleted: false
        });

        const result = await doc.save();

        if(result) {
            res.status(200).json(result);
        }
        else {
            console.log("An error occured while adding a task!");
            res.status(500).json({message: "An error occured while adding a task!"});
        }

    } catch (error) {
        console.log("An error occured while adding a task!");
        res.status(500).json({message: "An error occured while adding a task! " + error});
    }
}