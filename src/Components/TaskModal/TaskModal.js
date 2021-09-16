import React from 'react';
import {useState} from 'react'
import "./TaskModal.css"

const TaskModal = (props) => {
    console.log(props.data)
    return ( <div className="task-modal-container">
        <div className="task-modal-header">
            <div className="task-categories-container">
                {props.data.category}
                <div className="task-category-selector" onClick={() => {props.moveTask('to-do',props.data.category,props.data, props.index)}}>To Do</div>
                <div className="task-category-selector" onClick={() => {props.moveTask('in-progress', props.data.category,props.data, props.index)}}>In Progress</div>
                <div className="task-category-selector" onClick={() => {props.moveTask('stuck', props.data.category,props.data, props.index)}}>Stuck</div>
                <div className="task-category-selector" onClick={() => {props.moveTask('complete', props.data.category,props.data, props.index)}}>Complete</div>
            </div>
        </div>
        <button className="close-task-modal-button" onClick={() =>{props.setTaskModal(undefined)}}>x</button>
            <div className="task-modal-task-title">{props.data.taskTitle}</div>
            <div className="task-modal-task-description">{props.data.taskDescription}</div>
        </div> );
}
 
export default TaskModal;