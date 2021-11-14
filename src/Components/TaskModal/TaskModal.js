import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import "./TaskModal.css"

const TaskModal = (props) => {


    const modalAnimation = useSpring({from: {opacity: 0, right: -1000}, to: {opacity: 1, right: 0}})


    function closeTaskModal(){
        document.querySelector('.task-modal-container').style.transition = '0.3s'
       
       document.querySelector('.task-modal-container').style.opacity = 0;
       document.querySelector('.task-modal-container').style.right = '-1000px'
       setTimeout(() => {
           props.setTaskModal(false)
       }, 300)
    }


    console.log(props.data)


    function moveToNextSection(){
        if(props.data.category === 'to-do'){
            props.moveTask('in-progress', props.data.category, props.data, props.data.index)
        }
        else if(props.data.category === 'in-progress'){
            props.moveTask('stuck', props.data.category, props.data, props.data.index)
        }

        else if(props.data.category === 'stuck'){
            props.moveTask('complete', props.data.category, props.data, props.data.index)
        }
    }


    
    return (
        <div className="task-modal-view-container">
        <div className="task-modal-overlay" onClick={() => { closeTaskModal(); }}> </div>
        <animated.div className="task-modal-container" style={modalAnimation}>
       
        <button className="close-task-modal-button" onClick={() => { closeTaskModal();}}>x</button>
        <div className="task-modal-task-title">{props.data.taskTitle}</div>

        <div className="task-modal-category-changer-wrapper">
            <div className="task-modal-category-changer">
                <div className={"category-color-circle " + props.data.category}></div>
                <div className="category-changer-text">{props.data.category.toUpperCase()}</div>
               
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
                <div className="task-modal-task-description-text">{props.data.taskDescription}</div>


        </div>

        <div className="task-modal-task-description task-block">

                <div className="task-block-header">
                <i class="fas fa-book"></i>
                    <div className="task-block-header-text">Tasks</div>
                </div>

                <div className="task-modal-sub-tasks-container">

                    <div className="sub-task-container">
                        <div className="sub-task-check-box"></div>
                        <div className="sub-task-text">Take out the trash.</div>
                    </div>
                    <div className="sub-task-container">
                        <div className="sub-task-check-box"></div>
                        <div className="sub-task-text">Take out the trash.</div>
                    </div>
                    <div className="sub-task-container">
                        <div className="sub-task-check-box"></div>
                        <div className="sub-task-text">Take out the trash.</div>
                    </div>
                    <div className="sub-task-container">
                        <div className="sub-task-check-box"></div>
                        <div className="sub-task-text">Take out the trash.</div>
                    </div>
                </div>
               


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