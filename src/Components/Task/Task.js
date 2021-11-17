import React from 'react';
import "./Task.css"
import {useState} from 'react'

const Task = (props) => {

    const [taskCardMenu, setTaskCardMenu] = useState(false)



    function taskCardMenuHandler(){
        if(taskCardMenu){
            return(<div className="task-card-menu-container">
                <button onClick={() => {props.deleteTask(props.data.taskID, props.index)}}>Delete</button>
            </div>)
        }

    }

    function makeTaskModalData(){
        let modalObject = props.data;
        modalObject.category = props.data.category
        modalObject.index = props.index
        props.setTaskModal(modalObject)
    }




    return (  <div className="task-container"  draggable="true">
        {taskCardMenuHandler()}
      
        <div className="task-card-options-button" onClick={() => {setTaskCardMenu(true)}}><i class="fas fa-ellipsis-h"></i></div>
        <div className="task-card-body" onClick={makeTaskModalData}>
    <div className="task-main-text">{props.data.taskTitle}</div>
    <div className="task-description">{props.data.taskDescription}</div>
    <div className="task-tags-container">
        <div className="task-tag development">Development</div>
        <div>{props.data.category}</div>
    </div>
    </div>
 </div> );
}
 
export default Task;