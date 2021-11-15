import React from "react";
import "./TasksContainer.css";
import Task from "../Task/Task";

import { useState, useEffect } from "react";

const TasksContainer = (props) => {

  console.log(props)


  let projectObject = {

    projectName: props.taskData.projectName,
    projectDescription: props.taskData.projectDescription,
    toDoTasks: props.taskData.toDoTasks,
    inProgressTasks: props.taskData.inProgressTasks,
    stuckTasks: props.taskData.stuckTasks,
    completeTasks: props.taskData.completeTasks,

  }



  
  function addTask(taskPlace){


    props.updateList()
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

    
  function renderSettingsPage(){
    if(props.settingsPage){
      return(<div className="settings-page-container">
        SETTINGS PAGE 

      <button onClick={() => {props.deleteProject(); props.setSettingsPage(false)}}>Delete Project</button>


        <button onClick={() => {props.setSettingsPage(false)}}>Close</button>

        </div>)
    }
  }
    return (
      <div className="tasks-container">
        {renderSettingsPage()}

        
       
        <div className="todo-tasks-container">
          <div className="tasks-wrapper-header">
            <div className="header-dot to-do-header"></div>
            <div className="task-header-text">TO DO</div>
             <span className="task-count">({props.taskData.toDoTasks.length})</span><button onClick={() => {props.setAddTaskModal(true)}} className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
           
            {props.taskData.toDoTasks.map((task, index) => (
              <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} category="to-do" index={index}/>
            ))}
          </div>
        </div>
        <div className="in-progress-tasks-container ">
          <div className="tasks-wrapper-header">
          <div className="header-dot in-progress-header"></div>
          <div className="task-header-text">IN PROGRESS</div>
             <span className="task-count">({props.taskData.inProgressTasks.length})</span><button  className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.inProgressTasks.map((task, index) => (
              <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} category="in-progress" index={index}/>
            ))}
          </div>
        </div>
        <div className="stuck-tasks-container">
          <div className="tasks-wrapper-header ">
          <div className="header-dot stuck-header"></div>
          <div className="task-header-text">STUCK</div>
            
             <span className="task-count">({props.taskData.stuckTasks.length})</span><button  className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.stuckTasks.map((task, index) => (
              <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} category="stuck" index={index}/>
            ))}
          </div>
        </div>
        <div className="complete-tasks-container">
          <div className="tasks-wrapper-header ">
          <div className="header-dot complete-header"></div>
          <div className="task-header-text">COMPLETE</div>
            <span className="task-count">({props.taskData.completeTasks.length})</span><button className="add-task-button">+</button>
          </div>
          <div className="tasks-wrapper">
            {props.taskData.completeTasks.map((task, index) => (
              <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal}category="complete" index={index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default TasksContainer;
