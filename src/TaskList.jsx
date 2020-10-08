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
                        </p>
                    </li>
                );
            })}
        </ul>
    )
}

export default TaskList