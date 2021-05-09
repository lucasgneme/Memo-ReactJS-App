import React, { useState } from "react";

export default function TaskCreator({ createTaskItem }) {
  const [newTaskValue, setNewTaskValue] = useState("");

  const updateNewTaskValue = (e) => {
    setNewTaskValue(e.target.value);
  };

  const createNewTask = () => {
    createTaskItem(newTaskValue)
    setNewTaskValue("");
  };

  const enterPress = (e) => {
    let code = e.keyCode;
    if (code === 13) {
      createNewTask();
    }
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter task description here.."
        value={newTaskValue}
        onChange={updateNewTaskValue}
        onKeyUp={(e) => enterPress(e)}
      />
      <button className="text-white btn btn-dark mx-1 fw-bold" onClick={createNewTask} >
        Add
      </button>
    </>
  );
}
