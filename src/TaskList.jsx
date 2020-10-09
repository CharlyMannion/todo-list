import React from 'react';

const TaskList = (props) => {
    const handleDelete = (event) => {
        const taskToDelete = event.target.name
        console.log(taskToDelete)
        props.deleteTask(taskToDelete);
    }
    return (
        <ul>
            {props.tasks.map(({task, date}) => {
                return (
                    <li key={task}>
                        <p>
                            {task}
                            <br/>
                            {date}
                            <br/>
                            <button onClick={handleDelete} name={task}>Delete Task</button>
                        </p>
                    </li>
                );
            })}
        </ul>
    )
}

export default TaskList