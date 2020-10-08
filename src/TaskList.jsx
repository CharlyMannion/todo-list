import React from 'react';

const TaskList = (props) => {
    console.log(props, '<----------- PROPS');
    return (
        <ul>
            {props.tasks.map(({name, date}) => {
                return (
                    <li key={name}>
                        <p>
                            {name}
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