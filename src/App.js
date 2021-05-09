import React, { useState, useEffect } from "react";
import TaskHeader from "./Components/TaskHeader";
import TaskCreator from "./Components/TaskCreator";
import TaskRow from "./Components/TaskRow";
import VisibilityControl from "./Components/VisibilityControl";
import { v4 as uuidv4 } from "uuid";
// import SignIn from "./Components/SignIn";

function App() {
  const [userName, setUserName] = useState("* UserName *");
  const [taskList, setTaskList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskList(JSON.parse(data));
    } else {
      setUserName("");
      setTaskList([
        {
          name: "Example Task 1",
          done: false,
          id: uuidv4(),
        },
        {
          name: "Example Task 2",
          done: true,
          id: uuidv4(),
        },
      ]);
      setShow(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const createTaskItem = (taskName) => {
    if (!taskList.find((t) => t.name === taskName) && taskName) {
      setTaskList([...taskList, { name: taskName, done: false, id: uuidv4() }]);
    }
  };

  const togleTasks = (task) =>
    setTaskList(
      taskList.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  // const drawAdvertence = () => (
  //   <div className="alert alert-primary" role="alert">
  //     <h4 className="alert-heading">"Please confirm if you really want to delete this task!!!"</h4>
  //   </div>
  // );

  // const showSucces = () => (<div className="modal-dialog modal-dialog-centered">"Done!
  // Has been successfully removed"</div>)

  const deleteTask = (data) => {
    var secure = window.confirm(
      "Please confirm if you really want to delete this task!!!"
    );
    if (secure) {
      setTaskList((oldTasks) => oldTasks.filter((t) => t.id !== data.id));
    }
  };

  const drawTasks = (doneValue) =>
    taskList
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          task={task}
          key={task.id}
          togleTasks={togleTasks}
          deleteTask={deleteTask}
        />
      ));

  return (
    <>
      {/* HEADER */}
      <div className="text-white text-center bg-danger bg-gradient w-100 align-items-center d-flex justify-content-between p-3">
        <TaskHeader userName={userName} taskList={taskList} />
      </div>
      {/* INPUTBAR */}
      <div className="container">
        <hr />
      </div>
      <div className="container d-flex flex-row ">
        <TaskCreator createTaskItem={createTaskItem} />
      </div>
      {/* INCOMPLETE TASKS */}
      <div>
        <div className="container">
          <hr />
          <table className="table table-responsive align-middle table-dark table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th>Description</th>
                <th className="col-1 text-center">Done</th>
                <th className="col-1 text-center">SubTask</th>
                <th className="col-1 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{drawTasks(false)}</tbody>
          </table>
          <hr />
        </div>
        {/* TOGLE COMPLETED TASKS */}
        <div className="container rounded bg-success bg-gradient text-white text-center p-2">
          <VisibilityControl
            isChecked={show}
            newValue={(checked) => setShow(checked)}
            description="completed tasks"
          />
        </div>
        {/* COMPLETE TASKS */}
        {show && (
          <div className="container">
            <hr />
            <table className="table table-responsive align-middle table-success table-hover table-bordered table-striped">
              <thead>
                <tr>
                  <th>Description</th>
                  <th className="col-1 text-center">Done</th>
                  <th className="col-1 text-center">SubTask</th>
                  <th className="col-1 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>{drawTasks(true)}</tbody>
            </table>
          </div>
        )}
      </div>
      {/* <SignIn /> */}
    </>
  );
}
export default App;
