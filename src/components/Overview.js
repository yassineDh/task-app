import React, { Component } from "react";

class Overview extends Component {
  // constructor(props) {
  //     super(props)

  //     this.state = {

  //     }
  // }
  t = ["a", "b", "c"];

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
