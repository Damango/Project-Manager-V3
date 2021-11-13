import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import "./TaskModal.css"

const TaskModal = (props) => {


    const modalAnimation = useSpring({from: {opacity: 0, width: 0}, to: {opacity: 1, width: 1000}})







    console.log(props.data)


    
    return (
    
        <div className="task-modal-overlay" onClick={() => { props.setTaskModal(undefined) }}>
    <animated.div className="task-modal-container" style={modalAnimation}>
        <div className="task-modal-header">
            <div className="task-categories-container">
                {props.data.category}
                <div className="task-category-selector" onClick={() => { props.moveTask('to-do', props.data.category, props.data, props.data.index) }}>To Do</div>
                <div className="task-category-selector" onClick={() => { props.moveTask('in-progress', props.data.category, props.data, props.data.index) }}>In Progress</div>
                <div className="task-category-selector" onClick={() => { props.moveTask('stuck', props.data.category, props.data, props.data.index) }}>Stuck</div>
                <div className="task-category-selector" onClick={() => { props.moveTask('complete', props.data.category, props.data, props.data.index) }}>Complete</div>
            </div>
        </div>
        <button className="close-task-modal-button" onClick={() => { props.setTaskModal(undefined) }}>x</button>
        <div className="task-modal-task-title">{props.data.taskTitle}</div>
        <div className="task-modal-task-description">{props.data.taskDescription}</div>
    </animated.div>
    </div>
    
    );
}

export default TaskModal;