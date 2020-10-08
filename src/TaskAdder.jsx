import React from 'react';

class TaskAdder extends React.Component {
    state = {
        task: '', 
        date: '',
    };

    handleChange = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [inputName]: value
            }
        });
    }

    render() {
        console.log(this.state, "<-------- STATE IN TASK ADDER")
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.addTask({
                    task: this.state.task,
                    date: this.state.date
                });
                this.setState({
                    task: '',
                    date: ''
                })
            }}
            >

                <label htmlFor='task'>
                    Task:
                </label>
                <input id="task" name="task" onChange={this.handleChange} value={this.state.task}/>  
                <label htmlFor='date'>
                    Date:
                </label>
                <input id="date" name="date" onChange={this.handleChange} value={this.state.date}/>          
                <button>Submit new Task</button>
            </form>
        )
    }


}

export default TaskAdder