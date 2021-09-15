import React from 'react';
import {useState} from 'react'
import "./TaskModal.css"

const TaskModal = (props) => {
    return ( <div className="task-modal-container">
        <button className="close-task-modal-button" onClick={() =>{props.setTaskModal(undefined)}}>x</button>
            <div className="task-modal-task-title">{props.data.taskTitle}</div>
            <div className="task-modal-task-description">{props.data.taskDescription}</div>
        </div> );
}
 
export default TaskModal;