import React from 'react';
import TaskList from './TaskList.jsx';
import TaskAdder from './TaskAdder.jsx';
import TaskSorter from './TaskSorter'
import './App.css';

class App extends React.Component {
    state = {
        tasks: [
        {task: 'e task 1', date: '2020-10-10'},
        {task: 'd task 2', date: '2020-10-31'},
        {task: 'c task 3', date: '2020-10-11'}
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
            const newState = prevState.tasks.filter(element => {
                return element.task !== task
            })
            return {
                tasks: newState  
            }
        })
    }

    sortTasks = () => {
        this.setState((prevState) => {
            const newArr = [...prevState.tasks];
            const sortedArr = newArr.sort((a, b) => (a.task > b.task) ? 1 : -1);
            return {
                tasks: sortedArr
            };
        })
    }

    render() {
        return (
            <div className='App'>
            <h1>Todo List</h1>
            <TaskSorter sortTasks={this.sortTasks}/>
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>  
            <TaskAdder addTask={this.addTask}/> 
            </div> 
            );
    }
}



export default App;