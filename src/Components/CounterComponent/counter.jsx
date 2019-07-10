import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0
    }

    handleIncrement = () => {
        this.setState({ count: ++this.state.count })
    }

    render() {
        return (
            <div className="col-5">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-primary btn-sm" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes+=(this.state.count > 10)? 'warning':'primary';
        return classes;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
      }
}
export default Counter;