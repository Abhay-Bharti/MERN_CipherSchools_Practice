import { useState } from "react"
import Task from "../components/Task";

const ToDoScreen_func = () => {

    const [taskList, setTaskList] = useState([]);
    return (
        <div className="btn">
            <h1 className="ui heading center">To Do List</h1>
            <div className="btn">
                <button onClick={(event) => {
                    setTaskList([
                        ...taskList,
                        {
                            title: "Go to gym",
                            description: "Going to gym is good for muscle health",
                            createdDate: new Date(),
                        },
                    ]);
                }}
                    className="ui secondary button btn">Add Task</button>
                <section>
                    <div className="ui cards">
                        {taskList.map((task, index) => (<Task task={task} key={index}/>))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ToDoScreen_func;