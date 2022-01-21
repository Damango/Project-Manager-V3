import React from 'react';
import "./AddTaskModal.css"
import {useState} from 'react'
const AddTaskModal = (props) => {

    const [selectedTags, setSelectedTags] = useState([])


    function clearDescriptionInput(){
        
        let descriptionText = document.querySelector('.task-description-input');
        if(descriptionText.innerHTML === 'Task-Description'){
            descriptionText.innerHTML = ''
        }
        

       
    }

    function addCategoryTags(tag){
        console.log(tag)

        let theTags = [...selectedTags]
        let i;
        let tagExists = false;

        for(i = 0; i < theTags.length; i++){
            if(theTags[i] === tag){
                tagExists = true
                theTags.splice(i, 1)
            }
        }

        if(!tagExists){
            theTags.push(tag)
            setSelectedTags(theTags)
        }

        
    }

    function addTask(){
        let newTask;
   
        newTask = {
          taskTitle: document.querySelector('.task-title-input').value,
          taskDescription: document.querySelector('.task-description-input').innerHTML, 
          taskTags: selectedTags, 
          subTasks: [], 
          taskID: Math.floor(Math.random() * 10000),
          category: 'to-do'
        }

        console.log(newTask)
        props.addTask(newTask)
    }



    return ( <div className="add-task-modal-container">
       
        <button className="close-task-modal-button" onClick={() => {props.setAddTaskModal(false)}}>x</button>
        <div className="add-task-modal-input-section">
            <input className="task-title-input" placeholder="Task-Title"/>
            <div contentEditable="true" className="task-description-input" onMouseDown={() => {clearDescriptionInput()}}>Task-Description</div>
            <button className="add-task-modal-submit-button" onClick={() => {addTask()}} >Submit</button>
        </div>
        <div className="add-task-labels-container">
            <button className="development-label-button label-button" onClick={() => {addCategoryTags('Development')}}>Development</button>
            <button className="design-label-button label-button" onClick={() => {addCategoryTags('Design')}}>Design</button>
            <button className="bussiness-label-button label-button" onClick={() => {addCategoryTags('Bussiness')}}>Bussiness</button>
            <button className="engineering-label-button label-button" onClick={() => {addCategoryTags('Engineering')}}>Engineering</button>
        </div>

        
    </div> );
}
 
export default AddTaskModal;