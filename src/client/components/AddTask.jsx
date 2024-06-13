import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function AddTask() {

    const [taskName, setName] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (ev) => {

        ev.preventDefault();

        try {

            const task = { name: taskName, description };

            console.log(task);

            if(!task.name || !task.description) {
                throw Error('Infos were not taken successfully from form!');
            }

            const response = await axios.post('https://mytasks-tq72.onrender.com/addTask', JSON.stringify(task), {
                headers: {
                    'Content-Type': 'application/json'
                },
                validateStatus: status => status >= 200 
            });
            if (response.status !== 200) {
                console.log("An error occurred while adding task!");
            } else {
                navigate('/');
            }



        } catch (error) {
            console.log("An error occured while adding task " + error)
        }
    }


    return(
        <div>
            <h1 className="font-bold text-3xl text-center mb-6">Add a task</h1>
            <form onSubmit={handleSubmit} id="addForm" className="flex flex-col items-center mx-auto" style={{width: '400px'}}>
                <label htmlFor="taskName" className="my-4 font-bold text-xl">Task's name</label>
                <input type="text" name='taskName' required placeholder="Your task's title" id="taskName" className="w-full rounded-lg h-11 border pl-4" value = {taskName} onChange={(e) => {setName(e.target.value)}} />
                <label htmlFor="taskDesc" className="my-4 font-bold text-xl">Task's description</label>
                <textarea required placeholder="A simple description of your task" id="taskDesc" name='taskDesc' className="w-full rounded-lg h-11 border pl-4 pt-4 min-h-32" value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
                <button form="addForm" type="submit" className="rounded-lg text-white p-2 bg-black m-6 h-12">Add task</button>
            </form>
        </div>
    );
}


export default AddTask;