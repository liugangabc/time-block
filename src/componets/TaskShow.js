import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "../css/index.css"


class TaskShow extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        onDelete: PropTypes.func,
        onEdit: PropTypes.func,
        onRefresh: PropTypes.func
    };

    static defaultProps = {
        task: {}
    }

    constructor(props) {
        super(props);
        this.state = {
            task: props.task,
            edit_flag: false,
        }
    }

    _getBgColor() {
        const task = this.state.task
        if (task.level > 80) {
            return "urgency"
        } else if (task.level > 60) {
            return "prominent"
        } else {
            return "subsidiary"
        }
    }

    handleChangeTask = (event) => {
        this.setState({
            task: {...this.state.task, task: event.target.value}
        })
    }

    handleCancelChange = () => {
        if (this.props.onRefresh) {
            this.props.onRefresh()
        }
        this.setState({edit_flag: false})
    }

    handleEditTask = () => {
        if (this.props.onEdit) {
            const param = {
                task: {...this.state.task}
            }
            this.props.onEdit(param)
        }
        this.setState({edit_flag: false})
    }

    handleDeleteTask = () => {
        if (this.props.onDelete) {
            this.props.onDelete()
        }
    }

    render() {
        const color = this._getBgColor()
        const task = this.state.task
        const edit_flag = this.state.edit_flag
        return (
            <li className={`${color} list-group-item task`}>
                {
                    !edit_flag ? task.task :
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">优先级</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" value={task.level}
                                           placeholder="1~100"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">进度</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" value={task.rate * 100}
                                           placeholder="1~100"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">任务</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="3" value={task.task}
                                              onChange={this.handleChangeTask}/>
                                </div>
                            </div>
                        </form>
                }
                <div className="edit">
                    {
                        !edit_flag ? null :
                            <span
                                className="iconfont icon-wancheng edit-task"
                                onClick={this.handleEditTask}
                            />
                    }
                    {
                        !edit_flag ? null :
                            <span
                                className="iconfont icon-shanchu cancel-change"
                                onClick={this.handleCancelChange}
                            />
                    }
                    {
                        edit_flag ? null :
                            <span
                                className="iconfont icon-tubiao09 change-task"
                                onClick={() => {
                                    this.setState({edit_flag: true})
                                }}
                            />
                    }
                    {
                        edit_flag ? null :
                            <span
                                className="iconfont icon-shanchu1 delete-task"
                                onClick={this.handleDeleteTask}
                            />
                    }
                </div>
            </li>
        );
    }
}

export default TaskShow;