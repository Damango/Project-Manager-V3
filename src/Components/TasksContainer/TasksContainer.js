import React from "react";
import "./TasksContainer.css";
import Task from "../Task/Task";

import { useState, useEffect } from "react";

const TasksContainer = (props) => {




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




 

    
  


    return(<div className="tasks-container">
    {renderSettingsPage()}

    
   
    <div className="todo-tasks-container">
      <div className="tasks-wrapper-header">
        <div className="header-dot to-do-header"></div>
        <div className="task-header-text">TO DO</div>
         <span className="task-count">()</span><button onClick={() => {props.setAddTaskModal(true)}} className="add-task-button">+</button>
      </div>
      <div className="tasks-wrapper">

      {props.taskData.tasks.filter(task => task.category === 'to-do').map((task, index) => (
          <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} index={index}/>
        ))}
       
        
      </div>
    </div>
    <div className="in-progress-tasks-container ">
      <div className="tasks-wrapper-header">
      <div className="header-dot in-progress-header"></div>
      <div className="task-header-text">IN PROGRESS</div>
         <span className="task-count">()</span><button  className="add-task-button">+</button>
      </div>
      <div className="tasks-wrapper">
      {props.taskData.tasks.filter(task => task.category === 'in-progress').map((task, index) => (
          <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} index={index}/>
        ))}
      </div>
    </div>
    <div className="stuck-tasks-container">
      <div className="tasks-wrapper-header ">
      <div className="header-dot stuck-header"></div>
      <div className="task-header-text">STUCK</div>
        
         <span className="task-count">()</span><button  className="add-task-button">+</button>
      </div>
      <div className="tasks-wrapper">
      {props.taskData.tasks.filter(task => task.category === 'stuck').map((task, index) => (
          <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} index={index}/>
        ))}
      </div>
    </div>
    <div className="complete-tasks-container">
      <div className="tasks-wrapper-header ">
      <div className="header-dot complete-header"></div>
      <div className="task-header-text">COMPLETE</div>
        <span className="task-count">()</span><button className="add-task-button">+</button>
      </div>
      <div className="tasks-wrapper">
      {props.taskData.tasks.filter(task => task.category === 'complete').map((task, index) => (
          <Task deleteTask={props.deleteTask} data={task} setTaskModal={props.setTaskModal} index={index}/>
        ))}
      </div>
    </div>
  </div>)
  }

  



    
  };


export default TasksContainer;
