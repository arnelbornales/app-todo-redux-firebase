import React from "react";
import moment from "moment";
import { removeTask } from "../../actions/taskActions";
import { connect } from "react-redux";
import Check from "./Check";
import { toggleChecked } from "../../actions/taskActions";
import { editTask } from "../../actions/taskActions";

const Task = ({ task, removeTask, toggleChecked, editTask }) => {

  const handleRemove = (task) => {
    removeTask(task);
  };

  const handleCheck = (task) => {
    toggleChecked(task);
  };

  const handleEdit = (task) => {
    return 'asdasd'
  };
  return (
    <>
      <tr>
        {/* <td style={ task.checked ? { color: '#999' } : null }>{task.task}</td> */}
        <td className={ task.checked ? 'text-success' : null } style={ task.checked ? { 'text-decoration-line': 'line-through' } : null }>{task.task}</td>
        <td className={ task.checked ? 'text-success' : null }>{moment(task.date.toDate()).calendar()}</td>
        <td className={ task.checked ? 'text-success' : null }>{task.checked === true && moment(task.completedDate.toDate()).calendar() }</td>
        <td>
          <Check onClick={() => handleCheck(task)} checked={task.checked} />
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
          {/* <span
            className="material-icons text-update"
            style={{ cursor: "pointer" }}
            onClick={() => handleEdit(task)}
          >
            edit
          </span> */}
        </td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task)),
    editTask: (task) => dispatch(editTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
