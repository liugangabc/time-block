import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TaskShow from './TaskShow'
import TaskForm from './TaskForm'


class TaskList extends Component {
    static propTypes = {
        tasks: PropTypes.array,
        onAddTack: PropTypes.func
    };

    static defaultProps = {
        tasks: []
    }

    constructor(props) {
        super(props);
        this.state = {
            add_flag: false
        }
    }

    handleAddTask = (task) => {
        console.log(task)
        if (this.props.onAddTack) {
            this.props.onAddTack(task)
        }
        this.setState({add_flag: false})
    }

    handleCancelAdd = () => {
        this.setState({add_flag: false})
    }

    render() {
        const add_flag = this.state.add_flag
        return (
            <ul className="list-group task-list">
                {this.props.tasks.map((task, key) => {
                    return (
                        <TaskShow key={key} task={task}/>
                    )
                })}
                {
                    !add_flag ?
                        <li className="list-group-item add" onClick={() => {
                            this.setState({add_flag: true})
                        }}>+</li> :
                        <li className="list-group-item add">
                            <TaskForm
                                onSubmit={this.handleAddTask}
                                onCancel={this.handleCancelAdd}
                            />
                        </li>
                }
            </ul>
        )
    }
}

export default TaskList;