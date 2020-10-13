import React from "react";
import AddTask from "../tasks/AddTask";
import EditTask from "../tasks/EditTask";
import Tasks from "../tasks/Tasks";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <>
      {/* <EditTask /> */}
      <AddTask />
      <Tasks />
    </>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

export default connect(mapStateToProps)(Dashboard);
