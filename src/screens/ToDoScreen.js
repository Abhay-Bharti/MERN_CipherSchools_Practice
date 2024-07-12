import { Component } from "react";

class ToDoScreen extends Component {
    state = {
        taskCount: 0,
    }

    render() {
        return (
            <div className="btn">
                <h1 className="ui heading center">To Do List</h1>
                <div className="btn">
                    <button onClick={(event) => {
                        this.setState({
                            ...this.state,
                            taskCount: this.state.taskCount + 1,
                        });
                        console.log(this.state.taskCount);
                    }}
                        className="ui secondary button btn">Add Task</button>
                </div>
                <p className="btn">Number of Tasks are : {this.state.taskCount}</p>
            </div>
        )
    }
}

export default ToDoScreen;