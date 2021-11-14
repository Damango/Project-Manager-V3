import React from 'react'
import "./SubTask.css"

const SubTask = (props) => {
    return ( <div className="sub-task-container">
    <div className="sub-task-check-box"></div>
    <div className="sub-task-text">{props.data}</div>
</div> );
}
 
export default SubTask;