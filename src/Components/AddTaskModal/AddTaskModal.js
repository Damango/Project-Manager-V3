import React from 'react';
import "./AddTaskModal.css"

const AddTaskModal = (props) => {


    function addTask(taskPlace){

        let newObject = {
          projectName: props.taskData.projectName,
          projectDescription: props.taskData.projectDescription,
          toDoTasks: props.taskData.toDoTasks,
          inProgressTasks: props.taskData.inProgressTasks,
          stuckTasks: props.taskData.stuckTasks,
          completeTasks: props.taskData.completeTasks,
      
        }

        let newTask = {
            taskTitle: document.querySelector('.task-title-input').value,
              taskDescription: document.querySelector('.task-description-input').value, taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: Math.floor(Math.random() * 2000)
        }
        if(taskPlace === 'to-do'){
          newObject.toDoTasks.push(newTask)
          console.log(newObject)
      
        }
        else if(taskPlace === 'in-progress'){
          newObject.inProgressTasks.push(newTask)
        }
      
        else if(taskPlace === 'stuck'){
          newObject.stuckTasks.push(newTask)
        }
        props.updateList(newObject)
      }
      





    return ( <div className="add-task-modal-container">
        <button className="add-task-modal-button" onClick={() => {props.setAddTaskModal(false)}}>x</button>
        <input className="task-title-input" placeholder="task-title"/>
        <input className="task-description-input"  placeholder="task-description"/>

        <button onClick={() => {addTask('to-do')}} >Submit</button>
    </div> );
}
 
export default AddTaskModal;