import React from 'react';
import "./AddTaskModal.css"

const AddTaskModal = (props) => {



    return ( <div className="add-task-modal-container">
        <button className="add-task-modal-button" onClick={() => {props.setAddTaskModal(false)}}>x</button>
        <input className="task-title-input" placeholder="task-title"/>
        <input className="task-description-input"  placeholder="task-description"/>

        <button onClick={() => {props.addTask('to-do')}} >Submit</button>
    </div> );
}
 
export default AddTaskModal;