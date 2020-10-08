import React from 'react';
import TaskList from './TaskList.jsx';
import './App.css';

class App extends React.Component {
    state = {
        tasks: [
        {name: 'task 1', date: '10/10/2020'},
        {name: 'task 2', date: '12/11/2020'},
        {name: 'task 3', date: '09/10/2020'}
    ]}

    render() {
        return (
            <div className='App'>
            <h1>Todo List</h1>
            <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}



export default App;