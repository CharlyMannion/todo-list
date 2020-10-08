import React from 'react';
import TaskList from './TaskList.jsx';
import TaskAdder from './TaskAdder.jsx';
import './App.css';

class App extends React.Component {
    state = {
        tasks: [
        {task: 'task 1', date: '10/10/2020'},
        {task: 'task 2', date: '12/11/2020'},
        {task: 'task 3', date: '09/10/2020'}
    ]}

    addTask = (task) => {
        this.setState((prevState) => {
            return {
                tasks: [...prevState.tasks, task]
            }
        })
        console.log(this.state)
    }

    deleteTask = (task) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.filter(element => element !== task)
            }
        })
    }

    render() {
        return (
            <div className='App'>
            <h1>Todo List</h1>
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>  
            <TaskAdder addTask={this.addTask}/> 
            </div> 
            );
    }
}



export default App;