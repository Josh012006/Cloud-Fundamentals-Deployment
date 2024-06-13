import { useState, useEffect } from "react";
import Task from "./Task";
import axios from "axios";
import { useNavigate } from "react-router-dom";






function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        async function fetchTasks() {
            const myTasks = await axios.get('http://localhost:3000/getAllTasks');

            if(myTasks.status === 200) {
                setTasks(myTasks.data);
            }
        }

        fetchTasks();

    }, []);

    const handleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.ID === id ? {...task, isCompleted: true} : task));
    }

    const navigate = useNavigate();


    return(
        <div className="flex flex-col items-center justify-around">
            <button className="rounded-lg text-white p-2 bg-black h-12" onClick= {() => {navigate('/add')}}>Add new task.</button>
            <div className="flex flex-col justify-center items-center">
                {tasks && tasks.map(element => {return <Task ID={element._id} key ={element._id}  Name={element.name} Description={element.description} isCompleted={element.isCompleted} onTaskCompletion={handleTaskCompletion} />} )}
            </div>
        </div>
    )
}


export default TaskList;