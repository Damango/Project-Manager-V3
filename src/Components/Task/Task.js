import React from 'react';
import "./Task.css"

const Task = (props) => {
    return (  <div className="task-container" draggable="true">
    <div className="task-main-text">Make atleast 10,000 dollars a month</div>
    <div className="task-description">When taking a look something really difficult, like trying to make a ridiculous amount of money in a short time it tends to get really difficult</div>
    <div className="task-tags-container">
        <div className="task-tag development">Development</div>
    </div>
 </div> );
}
 
export default Task;