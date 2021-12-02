import React from 'react';
import "./AddTaskModal.css"
import {useState} from 'react'
const AddTaskModal = (props) => {



    return ( <div className="add-task-modal-container">
        <button className="add-task-modal-button" onClick={() => {props.setAddTaskModal(false)}}>x</button>
        <input className="task-title-input" placeholder="task-title"/>
        <input className="task-description-input"  placeholder="task-description"/>
        <div className="add-task-labels-container">
            <button className="development-label-button label-button">Development</button>
            <button className="design-label-button label-button">Design</button>
            <button className="bussiness-label-button label-button">Bussiness</button>
            <button className="engineering-label-button label-button">Engineering</button>
        </div>

        <button onClick={() => {props.addTask('to-do')}} >Submit</button>
    </div> );
}
 
export default AddTaskModal;