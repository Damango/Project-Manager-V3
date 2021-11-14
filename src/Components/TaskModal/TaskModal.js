import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import "./TaskModal.css"
import SubTask from '../SubTask/SubTask'

const TaskModal = (props) => {


    const [taskModalData, setTaskModalData] = useState(props.data)



    const [subTasks, setSubTasks] = useState(taskModalData.subTasks)
    const [addSubTaskInput, setAddSubTaskInput] = useState(false)


    const [taskCategory, setTaskCategory] = useState(taskModalData.category)


    const modalAnimation = useSpring({from: {opacity: 0, right: -1000}, to: {opacity: 1, right: 0}})


    function closeTaskModal(){
        document.querySelector('.task-modal-container').style.transition = '0.3s'
       
       document.querySelector('.task-modal-container').style.opacity = '0'
       document.querySelector('.task-modal-container').style.right = '-1000px'
       setTimeout(() => {
           props.setTaskModal(false)
       }, 200)
    }


    console.log(props.data)


    function moveToNextSection(){
        if(taskModalData.category === 'to-do'){
            props.moveTask('in-progress', taskModalData.category, taskModalData, taskModalData.index)
        }
        else if(taskModalData.category === 'in-progress'){
            props.moveTask('stuck', taskModalData.category, taskModalData, taskModalData.index)
        }

        else if(taskModalData.category === 'stuck'){
            props.moveTask('complete', taskModalData.category, taskModalData, taskModalData.index)
        }
    }

    function submitSubTask(){

        let oldTaskObject = {...taskModalData}
        let newTaskObject;

        let oldProjectObject = {...props.viewState};
      


        let newSubTask = document.querySelector('.new-sub-task-input').value


      

        console.log(props.viewState)
        console.log(props.data.category)



        oldTaskObject.subTasks.push(newSubTask)

        newTaskObject = oldTaskObject;


        let taskIndex;


        if(props.data.category === 'to-do'){
            taskIndex =  oldProjectObject.toDoTasks.findIndex((task) => {
                return task.index === props.data.index
            })
            oldProjectObject.toDoTasks[taskIndex] = newTaskObject
        
        }
        else if(props.data.category === 'in-progress'){
            taskIndex =  oldProjectObject.inProgressTasks.findIndex((task) => {
                return task.index === props.data.index
            })
            oldProjectObject.inProgressTasks[taskIndex] = newTaskObject
        }

        else if(props.data.category === 'stuck'){
            taskIndex =  oldProjectObject.stuckTasks.findIndex((task) => {
                return task.index === props.data.index
            })
            oldProjectObject.stuckTasks[taskIndex] = newTaskObject
        }

        else if(props.data.category === 'complete'){
            taskIndex =  oldProjectObject.completeTasks.findIndex((task) => {
                return task.index === props.data.index
            })

            oldProjectObject.completeTasks[taskIndex] = newTaskObject
        }





        setTaskModalData(newTaskObject)
        let newProjectObject = oldProjectObject

    
       props.updateList(newProjectObject)






    }


    function renderNewSubTaskInput(){
        if(addSubTaskInput){
            return(<div className="new-sub-task-input-container">
                    <input className="new-sub-task-input" placeholder="Enter Title"/>
                    <button onClick={submitSubTask}>Submit</button>
                </div>)
        }
    }


    
    return (
        <div className="task-modal-view-container">
        <div className="task-modal-overlay" onClick={() => { closeTaskModal(); }}> </div>
        <animated.div className="task-modal-container" style={modalAnimation}>
       
        <button className="close-task-modal-button" onClick={() => { closeTaskModal();}}>x</button>
        <div className="task-modal-task-title">{taskModalData.taskTitle}</div>

        <div className="task-modal-category-changer-wrapper">
            <div className="task-modal-category-changer">
                <div className={"category-color-circle " + taskCategory}></div>
                <div className="category-changer-text">{taskCategory.toUpperCase()}</div>
               
            </div>
            <div className="category-changer-arrow-button" onClick={moveToNextSection}><i class="fas fa-caret-right"></i></div>
        </div>

        <div className="task-modal-author-info-container">
            <div className="task-modal-author-container task-block">
                <div className="task-block-header">
                    <i class="fas fa-user-circle"></i>
                    <div className="task-block-header-text">Creator</div>
                </div>
                <div className="task-block-text">Justin Kessler</div>

            </div>
            <div className="task-modal-date-container task-block">

                <div className="task-block-header">
                    <i class="fas fa-calendar-alt"></i>
                    <div className="task-block-header-text">Date Created</div>
                </div>
                <div className="task-block-text">Thu, November 20th, 2021 </div>


            </div>

             
        </div>

        <div className="task-modal-task-description task-block">

                <div className="task-block-header">
                <i class="fas fa-align-left"></i>
                    <div className="task-block-header-text">Description</div>
                </div>
                <div className="task-modal-task-description-text">{taskModalData.taskDescription}</div>


        </div>

        <div className="task-modal-task-description task-block">

                <div className="task-block-header">
                <i class="fas fa-book"></i>
                    <div className="task-block-header-text">Tasks</div>
                    <button className="add-sub-task-button" onClick={() => {setAddSubTaskInput(true)}}>Add +</button>
                </div>

                <div className="task-modal-sub-tasks-container">

                    {taskModalData.subTasks.map(task => <SubTask data={task}/>)}
                    
                   
                </div>
                {renderNewSubTaskInput()}
               


        </div>

         <div className="task-modal-task-description task-block">

                <div className="task-block-header">
                <i class="fas fa-comment"></i>
                    <div className="task-block-header-text">Comments</div>
                </div>

        </div>
        
        
    </animated.div>
   
    </div>
    );
}

export default TaskModal;