import React, {Component} from 'react';
import PropTypes from 'prop-types'


class DateShow extends Component {
    static propTypes = {
        date: PropTypes.string,
    }

    static defaultProps = {
        date: new Date().toLocaleString()
    }

    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        }
    }

    componentWillMount() {
        this._timer = setInterval(() => {
            this.setState({date: new Date().toLocaleString()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    render() {
        return (
            <div className="date-show col-md-12">
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}

export default DateShow;