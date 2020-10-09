import React from 'react';

const TaskSorter = (props) => {

    const handleSort = (event) => {
        props.sortTasks();
    }

    const handleSortByDate = () => {
        props.sortTaskByDate();
    }

    return (
        <div>
            <button onClick={handleSort}>Sort Alphabetically</button>
            <button onClick={handleSortByDate}>Sort By Date</button>
        </div>
    )
}


export default TaskSorter