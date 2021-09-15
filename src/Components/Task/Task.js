import React from 'react';
import "./Task.css"
import {useState} from 'react'

const Task = (props) => {

    const [taskCardMenu, setTaskCardMenu] = useState(false)



    function taskCardMenuHandler(){
        if(taskCardMenu){
            return(<div className="task-card-menu-container"></div>)
        }

    }




    return (  <div className="task-container" onClick={() => {props.setTaskModal(props.data)}} draggable="true">
        {taskCardMenuHandler()}
        <div className="task-card-options-button" onClick={() => {setTaskCardMenu(true)}}><i class="fas fa-ellipsis-h"></i></div>
    <div className="task-main-text">{props.data.taskTitle}</div>
    <div className="task-description">{props.data.taskDescription}</div>
    <div className="task-tags-container">
        <div className="task-tag development">Development</div>
    </div>
 </div> );
}
 
export default Task;