import React from "react";
import "./TasksContainer.css";
import Task from "../Task/Task";

import { useState, useEffect } from "react";

const TasksContainer = (props) => {

  console.log(props)

  
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

    
  function renderSettingsPage(){
    if(props.settingsPage){
      return(<div className="settings-page-container">
        SETTINGS PAGE 

      <button onClick={props.deleteProject}>Delete Project</button>


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
            <div className="task-header-text">To Do</div>
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
          <div className="task-header-text">In Progress</div>
             <span className="task-count">({props.taskData.inProgressTasks.length})</span><button onClick={() => {addTask('in-progress')}} className="add-task-button">+</button>
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
          <div className="task-header-text">Stuck</div>
            
             <span className="task-count">({props.taskData.stuckTasks.length})</span><button onClick={() => {addTask('stuck')}} className="add-task-button">+</button>
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
          <div className="task-header-text">Complete</div>
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
