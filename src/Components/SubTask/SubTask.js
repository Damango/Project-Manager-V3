import React from 'react'
import "./SubTask.css"

const SubTask = (props) => {








    return ( <div className={"sub-task-container " + props.data.completed + '-complete'}>
    <div className="sub-task-check-box" onClick={() => {props.completeTask(props.index)}}></div>
    <div className="sub-task-text">{props.data.text}</div>

    
</div> );
}
 
export default SubTask;