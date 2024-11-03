import React, { useState } from "react";
import "../task.css";
const Task = () => {
  const [task, setTask] = useState({});
  

  function handleSubmit(e) {
    e.preventDefault();
    //submit to the backend
    if ( task.taskName && task.taskDescription&&task.priorityLevel&&task.motivation&&task.positiveConsequences&& task.negativeConsequences)
    {
      // submit the data
    }
    else{
      console.log(" please fill all fields ")
    }
    console.log(" the form elements are :");
    console.log(" the task name", task.taskName);
    console.log(" the task description ", task.taskDescription);
    console.log(" the task priority level", task.priorityLevel);
    console.log(" the task due date", task.dueDate);
    console.log(" the task motivation ", task.motivation);
    console.log(" the task positive consequences ", task.positiveConsequences);
    console.log(" the task negative consequences ", task.negativeConsequences);

    setTask ({...task,
      taskName: "",
      taskDescription:"", 
      priorityLevel:"",
      dueDate:"", 
      motivation:"", 
      positiveConsequences:"", 
      negativeConsequences:""
    });
  
  }
  return (
    <div>
      <form
        className="container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="container2">
          <div className="form-group">
            <label for="taskName"> Task Name :</label>
            <input
              id="taskName"
              type="text"
              required
              value={task.taskName}
              onChange={(e) => {
                setTask({ ...task, taskName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label for="taskDesciption">Description: </label>
            <textarea
              type="text"
              id="taskDesciption"
              required
              value={task.taskDescription}
              onChange={(e) => {
                setTask({ ...task, taskDescription: e.target.value });
              }}
              
            />
          </div>

          <div className="form-group">
            <select
              id="priorityLevel"
              required
              value={task.priorityLevel}
              onChange={(e) => {
                setTask({ ...task, priorityLevel: e.target.value });
              }}
            >
              <option value="" selected disabled>
                Priority level
              </option>
              <option value="urgent"> Urgent</option>
              <option value="important">Important</option>
              <option value="fine">Fine</option>
              <option value="canBePostponed">Can be Postponed</option>
            </select>
          </div>

          <div className="form-group">
            <label for="dueDate">Due Date :</label>
            <input
              type="date"
              id="dueDate"
              required
              value={task.dueDate}
              onChange={(e) => {
                setTask({ ...task, dueDate: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label for="motivation">Motivation</label>
            <input
              type="text"
              id="motivation"
              required
              value={task.motivation}
              onChange={(e) => {
                setTask({...task , motivation:e.target.value});
              }}
            />
          </div>
          <div className="form-group">
            <label for="positiveConsequences">Positive Consequences :</label>
            <textarea
              id="positiveConsequences"
              required
              value={task.positiveConsequences}
              onChange={(e) => {
                setTask({...task , positiveConsequences:e.target.value});
              }}
            
            />
          </div>
          <div className="form-group">
            <label for="negativeConsequences">Negative Consequences :</label>
            <textarea
              id="negativeConsequences"
              required
              value={task.negativeConsequences}
              
              onChange={(e) => {
                setTask({...task , negativeConsequences:e.target.value});
              }}
              
             
            />
          </div>
        </div>
        <button type="submit"> add</button>
      </form>
    </div>
  );
};

export default Task;
