import React, { Component } from "react";
import Overview from "./components/Overview";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.input.current.value.trim()) {
      alert("please fill the input");
      return;
    }
    this.setState(
      (prevState) => ({
        tasks: [...prevState.tasks, this.input.current.value],
      }),
      () => {
        this.input.current.value = "";
      }
    );
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.input} />
          <button type="submit">Add task</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
