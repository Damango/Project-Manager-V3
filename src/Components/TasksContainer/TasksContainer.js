import React from 'react';
import "./TasksContainer.css"
import {useState, useEffect} from 'react'

const TasksContainer = (props) => {



    if(props.taskType === 'to-do-list'){
        return ( <div className="to-do-list-task-container">{props.taskData.map((task) => <div className="to-do-list-task">{task}</div>)}</div> );
    }

    else if(props.taskType === 'project'){
        return (<div className="tasks-container">f</div>)
    }
    
}
 
export default TasksContainer;