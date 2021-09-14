import React from 'react';
import "./Task.css"

const Task = (props) => {
    console.log(props.data)
    return (  <div className="task-container" draggable="true">
    <div className="task-main-text">{props.data.taskTitle}</div>
    <div className="task-description">{props.data.taskDescription}</div>
    <div className="task-tags-container">
        <div className="task-tag development">Development</div>
    </div>
 </div> );
}
 
export default Task;