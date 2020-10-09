import React from 'react';

const TaskSorter = (props) => {

    const handleSort = (event) => {
        props.sortTasks();
    }

    return (
        <button onClick={handleSort}>Sort Tasks</button>
    )
}


export default TaskSorter