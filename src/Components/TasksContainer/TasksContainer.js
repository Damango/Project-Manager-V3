import React from "react";
import "./TasksContainer.css";
import Task from "../Task/Task";
import { useState, useEffect } from "react";

const TasksContainer = (props) => {

  

  
  //console.log(props.taskData)
  function addTask(taskPlace){

   
    


    if(taskPlace === 'to-do'){
      let tasks = props.taskData.toDoTasks;
      let oldData = props.taskData;
      tasks.push({taskTitle: 'Test',
      taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40})
      oldData.toDoTasks = tasks;
      let newData = oldData;

      console.log(newData)

      props.updateList(newData)
    }
    
    

  }





  if (props.taskType === "to-do-list") {
    return (
      <div className="to-do-list-task-container">
        {props.taskData.map((task) => (
          <div className="to-do-list-task">{task}</div>
        ))}
      </div>
    );
  }
  
  


  
  
  else if (props.taskType === "project") {
    return (
      <div className="tasks-container">
        <div className="todo-tasks-container">
          <div className="tasks-wrapper-header to-do-header">
            To Do <span className="task-count">({props.taskData.toDoTasks.length})</span><button onClick={() => {addTask('to-do')}} className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
           
            {props.taskData.toDoTasks.map((task) => (
              <Task />
            ))}
          </div>
        </div>
        <div className="in-progress-tasks-container ">
          <div className="tasks-wrapper-header in-progress-header">
            In Progress <span className="task-count">({props.taskData.inProgressTasks.length})</span><button className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.inProgressTasks.map((task) => (
              <Task />
            ))}
          </div>
        </div>
        <div className="stuck-tasks-container">
          <div className="tasks-wrapper-header stuck-header">
            Stuck <span className="task-count">({props.taskData.stuckTasks.length})</span><button className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.stuckTasks.map((task) => (
              <Task />
            ))}
          </div>
        </div>
        <div className="complete-tasks-container">
          <div className="tasks-wrapper-header complete-header">
            Complete <span className="task-count">({props.taskData.completeTasks.length})</span><button className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.completeTasks.map((task) => (
              <Task />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TasksContainer;
