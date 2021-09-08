import React from 'react';
import "./TasksContainer.css"
import Task from "../Task/Task"
import {useState, useEffect} from 'react'

const TasksContainer = (props) => {



    if(props.taskType === 'to-do-list'){
        return ( <div className="to-do-list-task-container">{props.taskData.map((task) => <div className="to-do-list-task">{task}</div>)}</div> );
    }
    else if(props.taskType === 'project'){
        return (<div className="tasks-container">
             <div className="todo-tasks-container tasks-wrapper">
                 <div className="tasks-wrapper-header to-do-header">To Do <span className="task-count">( 5 )</span> </div>
                 {props.taskData.toDoTasks.map((task) => <Task />)}
             </div>
              <div className="in-progress-tasks-container tasks-wrapper">
              <div className="tasks-wrapper-header in-progress-header">In Progress <span className="task-count">( 5 )</span> </div>
              {props.taskData.inProgressTasks.map((task) => <Task />)}
              </div>
              <div className="stuck-tasks-container tasks-wrapper">
              <div className="tasks-wrapper-header stuck-header">Stuck <span className="task-count">( 5 )</span> </div>
              {props.taskData.stuckTasks.map((task) => <Task />)}
              </div>
              <div className="complete-tasks-container tasks-wrapper">
              <div className="tasks-wrapper-header complete-header">Complete <span className="task-count">( 5 )</span> </div>
              {props.taskData.completeTasks.map((task) => <Task />)}
              </div>
        </div>)
    }
    
}
 
export default TasksContainer;