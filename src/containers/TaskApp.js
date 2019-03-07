import React, {Component} from 'react'
import TaskList from '../componets/TaskList'
import DateShow from '../componets/DateShow'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class CommentApp extends Component {

    constructor() {
        super()
        this.state = {
            tasks: [
                // {
                //     task: "write blog 1",
                //     level: 100,
                //     rate: 0.1
                // }, {
                //     task: "write blog 2",
                //     level: 70,
                //     rate: 0.1
                // }, {
                //     task: "write blog 3",
                //     level: 10,
                //     rate: 0.1
                // }
            ]
        }
    }

    handleDelete = () => {
    }
    handleEdit = () => {
    }
    handleRefresh = () => {
    }
    handleAddTack = (task) => {
        let tasks = this.state.tasks
        tasks.push(task)
        this.setState({tasks: tasks})
    }

    render() {
        const tasks = this.state.tasks
        const date = new Date().toLocaleString()
        const funcs = {
            onAddTack: this.handleAddTack,
            onRefresh: this.handleRefresh,
            onEdit: this.handleEdit,
            onDelete: this.handleDelete
        }
        return (
            <div className='task-app container-fluid'>
                <div className='row'><DateShow date={date}/></div>
                <hr/>
                <TaskList tasks={tasks} {...funcs}/>
            </div>
        )
    }
}