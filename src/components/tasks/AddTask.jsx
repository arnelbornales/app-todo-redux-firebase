import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    task: "",
    checked: false,
    completedDate: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form
          id="addTaskForm"
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend> </legend>
          <div className="form-group">
            <h5 htmlFor="task">Add a Task</h5>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-md btn-success" style={{ padding: "10px 50px" }}>Add</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
