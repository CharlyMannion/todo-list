import React from 'react';

const TaskList = (props) => {
    console.log(props, '<----------- PROPS');
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
                            <button onSubmit={}>Delete Task</button>
                        </p>
                    </li>
                );
            })}
        </ul>
    )
}

export default TaskList