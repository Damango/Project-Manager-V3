import React from "react";
import "./Task.css";
import { useState, useRef } from "react";

const Task = (props) => {
	const taskRef = useRef(null);

	function makeTaskModalData() {
		let modalObject = props.data;
		modalObject.category = props.data.category;
		modalObject.index = props.index;
		props.setTaskModal(modalObject);
	}

	function taskCardMenuHandler() {
		let taskElement = taskRef.current;
		let taskPosition = taskElement.getBoundingClientRect();
		let newMenuObject = {
			opened: true,
			taskID: props.data.taskID,
			position: { x: taskPosition.x + 220, y: taskPosition.y - 20 },
		};

		if (props.taskCardMenu.opened === true) {
			props.setTaskCardMenu({
				opened: false,
				taskID: undefined,
				position: undefined,
			});
		} else {
			props.setTaskCardMenu(newMenuObject);
		}
	}

	function cutOffDescription() {
		let description = props.data.taskDescription;

		if (description.length > 90) {
			description = description.substring(0, 90) + "...";
		}
		return description;
	}

	return (
		<div className="task-container" draggable="true" ref={taskRef}>
			<div
				className="task-card-options-button"
				onClick={() => {
					taskCardMenuHandler();
				}}
			>
				<i class="fas fa-ellipsis-h"></i>
			</div>
			<div className="task-card-body" onClick={makeTaskModalData}>
				<div className="task-main-text">{props.data.taskTitle}</div>
				<div className="task-description">{cutOffDescription()}</div>
				<div className="task-tags-container">
					{props.data.taskTags.map((tag) => (
						<div className={"task-tag " + tag}>{tag}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Task;
