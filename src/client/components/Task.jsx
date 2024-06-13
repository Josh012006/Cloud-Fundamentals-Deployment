import axios from "axios";
import { useEffect, useState } from "react";

export default function Task({ID, Name, Description, isCompleted, onTaskCompletion}) {

    const [src, setSrc] = useState('/notcompleted.png');

    useEffect(() => {
        if(isCompleted) {
            setSrc('/completed.png');
        }
        else {
            setSrc('/notcompleted.png');
        }
    }, [isCompleted])

    const handleClick = async () => {
        const result = await axios.get(`https://mytasks-tq72.onrender.com/markAsCompleted/${ID}`);

        if(result.status === 200) {
            onTaskCompletion(ID);
        } else {
            console.log("An error occured while trying to mark task as completed!");
        }
    }

    return (
        <div className="flex flex-col bg-white border rounded-lg m-8 w-full" style={{width: '85%'}} id={ID}>
            <h1 className="text-2xl text-center p-6 border-b border-black">{Name}</h1>
            <div className="grid grid-cols-6 min-h-32">
                <p className="p-3 text-justify col-span-5 justify-center items-center">{Description}</p>
                <div className="grid grid-cols-1 col-span-1 items-center justify-items-center px-2 border-l border-black">
                    <img alt="completion status" src={src} className="col-span-1" width={32} height={32}></img>
                    <button className="col-span-1 rounded-lg text-white p-2 bg-black" onClick= {handleClick}>Mark as completed</button>
                </div>
            </div>
        </div>
    )
}