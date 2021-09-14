import React from "react";
import "./TasksContainer.css";
import Task from "../Task/Task";

import { useState, useEffect } from "react";

const TasksContainer = (props) => {

  

  
  function addTask(taskPlace){

    let newObject = {
      projectName: props.taskData.projectName,
      projectDescription: props.taskData.projectDescription,
      toDoTasks: props.taskData.toDoTasks,
      inProgressTasks: props.taskData.inProgressTasks,
      stuckTasks: props.taskData.stuckTasks,
      completeTasks: props.taskData.completeTasks,

    }
    if(taskPlace === 'to-do'){
      newObject.toDoTasks.push({taskTitle: 'Test',
      taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40})
      console.log(newObject)

    }
    else if(taskPlace === 'in-progress'){
      newObject.inProgressTasks.push({taskTitle: 'Test',
      taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40})

    }

    else if(taskPlace === 'stuck'){
      newObject.stuckTasks.push({taskTitle: 'Test',
      taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40})

    }
    props.updateList(newObject)
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
            To Do <span className="task-count">({props.taskData.toDoTasks.length})</span><button onClick={() => {props.setAddTaskModal(true)}} className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
           
            {props.taskData.toDoTasks.map((task) => (
              <Task data={task}/>
            ))}
          </div>
        </div>
        <div className="in-progress-tasks-container ">
          <div className="tasks-wrapper-header in-progress-header">
            In Progress <span className="task-count">({props.taskData.inProgressTasks.length})</span><button onClick={() => {addTask('in-progress')}} className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.inProgressTasks.map((task) => (
              <Task data={task}/>
            ))}
          </div>
        </div>
        <div className="stuck-tasks-container">
          <div className="tasks-wrapper-header stuck-header">
            Stuck <span className="task-count">({props.taskData.stuckTasks.length})</span><button onClick={() => {addTask('stuck')}} className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.stuckTasks.map((task) => (
              <Task data={task}/>
            ))}
          </div>
        </div>
        <div className="complete-tasks-container">
          <div className="tasks-wrapper-header complete-header">
            Complete <span className="task-count">({props.taskData.completeTasks.length})</span><button className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.completeTasks.map((task) => (
              <Task data={task}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TasksContainer;
