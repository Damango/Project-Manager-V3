import React from "react";
import "./AddTaskModal.css";
import { useState } from "react";
const AddTaskModal = (props) => {
	const [selectedTags, setSelectedTags] = useState([]);

	function clearDescriptionInput() {
		let descriptionText = document.querySelector(".task-description-input");
		if (descriptionText.innerHTML === "Task-Description") {
			descriptionText.innerHTML = "";
		}
	}

	function addCategoryTags(tag) {
		console.log(tag);

		let theTags = [...selectedTags];
		let i;
		let tagExists = false;

		for (i = 0; i < theTags.length; i++) {
			if (theTags[i] === tag) {
				tagExists = true;
				theTags.splice(i, 1);
			}
		}

		if (!tagExists) {
			theTags.push(tag);
			setSelectedTags(theTags);
		}
		setSelectedTags(theTags);
	}

	function addTask() {
		let newTask;

		newTask = {
			taskTitle: document.querySelector(".task-title-input").value,
			taskDescription: document.querySelector(".task-description-input")
				.innerHTML,
			taskTags: selectedTags,
			subTasks: [],
			taskID: Math.floor(Math.random() * 10000),
			category: "to-do",
		};

		console.log(newTask);
		props.addTask(newTask);
	}

	function selectedLabelClass(tag) {
		let i;
		for (i = 0; i < selectedTags.length; i++) {
			console.log(selectedTags[i]);
			console.log(tag);
			if (selectedTags[i] === tag) {
				return "selected-label";
			}
		}
	}

	console.log(
		"development-label-button label-button " + selectedLabelClass("design")
	);

	return (
		<div className="add-task-modal-container">
			<button
				className="close-task-modal-button"
				onClick={() => {
					props.setAddTaskModal(false);
				}}
			>
				x
			</button>

			<div className="add-task-modal-input-section">
				<input className="task-title-input" placeholder="Task-Title" />
				<div
					contentEditable="true"
					className="task-description-input"
					onMouseDown={() => {
						clearDescriptionInput();
					}}
				>
					Task-Description
				</div>
			</div>
			<div className="add-task-labels-container">
				<button
					className={
						"development-label-button label-button " +
						selectedLabelClass("Development")
					}
					onClick={() => {
						addCategoryTags("Development");
					}}
				>
					Development
				</button>
				<button
					className={
						"design-label-button label-button " + selectedLabelClass("Design")
					}
					onClick={() => {
						addCategoryTags("Design");
					}}
				>
					Design
				</button>
				<button
					className={
						"bussiness-label-button label-button " +
						selectedLabelClass("Bussiness")
					}
					onClick={() => {
						addCategoryTags("Bussiness");
					}}
				>
					Bussiness
				</button>
			</div>

			<button
				className="add-task-modal-submit-button"
				onClick={() => {
					addTask();
				}}
			>
				Submit
			</button>
		</div>
	);
};

export default AddTaskModal;
