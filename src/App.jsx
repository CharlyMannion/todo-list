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
    }

    deleteTask = (task) => {
        this.setState((prevState) => {
            console.log(task)
            console.log(prevState, '<---- previous state')
            const newState = prevState.tasks.filter(element => {
                console.log(element)
                return element.task !== task
            })
            console.log(newState, '<--- task deleted state')
            return {
                tasks: newState  
            }
        })
    }

    saveTasks = ( {toDoData} ) => {
        
    }

    render() {
        return (
            <div className='App'>
            <h1>Todo List</h1>
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>  
            <TaskAdder addTask={this.addTask}/> 
            <TaskSaver saveTasks={this.saveTasks} toDoData={this.state}/>
            </div> 
            );
    }
}



export default App;