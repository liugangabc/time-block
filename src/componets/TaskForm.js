import React, {Component} from 'react';
import PropTypes from 'prop-types'


class TaskForm extends Component {
    static propTypes = {
        task: PropTypes.object,
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func
    }

    static defaultProps = {
        task: {
            task: "",
            level: 0,
            rate: 0
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.task
        }
    }

    handleOnChange(event, type) {
        switch (type) {
            case "level":
                this.setState({level: event.target.value})
                break
            case "rate":
                this.setState({rate: event.target.value})
                break
            case "task":
                this.setState({task: event.target.value})
                break
            default:
                break
        }
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({...this.state})
        }
    }

    handleCancel() {
        if (this.props.onCancel) {
            this.props.onCancel({...this.state})
        }
    }

    render() {
        let task = {...this.state.task}
        return (
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">优先级</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control"
                               placeholder="1~100"
                               value={task.level}
                               onChange={this.handleOnChange.bind(this, "level")}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">进度</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control"
                               placeholder="1~100"
                               value={task.level}
                               onChange={this.handleOnChange.bind(this, "rate")}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">任务</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" rows="3"
                                  value={task.task}
                                  onChange={this.handleOnChange.bind(this, "task")}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={this.handleCancel.bind(this)}>Cancel</button>
            </form>
        );
    }
}

export default TaskForm;