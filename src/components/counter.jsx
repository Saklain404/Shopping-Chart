import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };
  // handelIncrement = () => {
  //   //arrow function is dont remind this keyword this is already inherited
  //   //console.log('button is clicked', this);
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };

  // handelDecrement = () => {
  //   this.setState({
  //     value: this.props.counter.value - 1
  //   });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeCount()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm mr-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDec(this.props.counter)}
          className="btn btn-secondary btn-sm mr-2"
        >
          {' '}
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeCount() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  }
}

export default Counter;
