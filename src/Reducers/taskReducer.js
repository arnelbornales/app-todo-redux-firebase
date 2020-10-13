import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Added a task");
      console.log(state);
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "EDIT_TASK": {
      toast.success("Edited a task");
      return state;
    }
    case "EDIT_TASK_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("A task was removed...");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("A task remove error occured....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.success("A task status changed...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("A task status change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
