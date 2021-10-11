import React, {useState, useEffect} from 'react';
import "./ToDoList.css"

const ToDoList = (props) => {


    const [newTaskInput, setNewTaskInput] = useState(false)
    const [tasksList, setTasksList] = useState(props.workflowData.toDoList)




    useEffect(() => {
        setTasksList(JSON.parse(localStorage.getItem('projectmanagerv3')).toDoList)
    }, [])

    function renderNewTaskInput(){

        if(newTaskInput){
            return( <div className="new-task-input-container">
            <input className="new-to-do-task-input" placeholder="New Task"/>
            <button onClick={() => {addTask()}}>Submit</button>
        </div>)
        }
       
    }


    function addTask(){

        let newTask = document.querySelector('.new-to-do-task-input').value

        let oldTaskList = [...tasksList];
        oldTaskList.push(newTask)

        let newTaskList = oldTaskList
        console.log(newTaskList)

        setTasksList(newTaskList)
        


        let newWorkflow = {
            toDoList: newTaskList,
            projects: props.workflowData.projects
          }

        localStorage.setItem('projectmanagerv3', JSON.stringify(newWorkflow))

    }


    function removeTask(index){

        let oldTaskList = [...tasksList];
        oldTaskList.splice(index, 1)
        let newTaskList = oldTaskList;
        setTasksList(newTaskList)

        let newWorkflow = {
            toDoList: newTaskList,
            projects: props.workflowData.projects
          }

        localStorage.setItem('projectmanagerv3', JSON.stringify(newWorkflow))

    }




    return ( <div className="to-do-list-container">
       <div className="to-do-list-tasks-container">
          
          {tasksList.map(((toDoItem, index) =>  <div className="to-do-list-task"> 

            <div onClick={() => removeTask(index)} className="check-box-container">
                <i class="fas fa-check"></i>
                <div className="check-box-hover-circle"></div>
            </div>

<           span className="to-do-list-text">{toDoItem}</span>

            </div>))}

           
            <div onClick={() => {if(newTaskInput){setNewTaskInput(false)} else{setNewTaskInput(true)}}} className="to-do-list-task new-to-do-item-button">
                <i class="fas fa-plus-circle"></i>ADD TASK
                </div>

                {renderNewTaskInput()}
                
            
       </div>
    </div> );
}
 
export default ToDoList;