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
    let {tasks,deleteTask} = this.props;
    return (
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}
          <button onClick={()=>{deleteTask(task)}}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Overview;
