import "./App.css";
import { useState, useEffect } from "react";
import NavLink from "./Components/NavLink/NavLink";
import TasksContainer from "./Components/TasksContainer/TasksContainer";
import AddTaskModal from "./Components/AddTaskModal/AddTaskModal";
import TaskModal from "./Components/TaskModal/TaskModal";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
	if (localStorage.getItem("projectmanagerv3")) {
		console.log("Data Exists");
	} else {
		localStorage.setItem(
			"projectmanagerv3",
			JSON.stringify({
				toDoList: [],
				projects: [],
			})
		);
	}

	/*localStorage.setItem('projectmanagerv3', JSON.stringify({
    toDoList: ['test'],
    projects:[]
  }))*/

	const [workflow, setWorkflow] = useState(
		JSON.parse(localStorage.getItem("projectmanagerv3"))
	);

	const [viewState, setviewState] = useState(workflow.toDoList);
	const [taskType, setTaskType] = useState("to-do-list");
	const [addTaskModal, setAddTaskModal] = useState(false);
	const [taskModal, setTaskModal] = useState();
	const [addProjectModal, setAddProjectModal] = useState(false);
	const [settingsPage, setSettingsPage] = useState(false);
	const [taskCardMenu, setTaskCardMenu] = useState({
		opened: false,
		taskID: undefined,
		position: undefined,
	});

	const [mobileNavBar, setMobileNavBar] = useState(false);

	function changeView(data, type) {
		setviewState(data);
		setTaskType(type);
	}

	function saveTaskChange(project) {
		let projectsList = workflow.projects;
		let projectIndex = projectsList
			.map(function (e) {
				return e.projectName;
			})
			.indexOf(project.projectName);
		projectsList[projectIndex] = project;
		let newWorkflow = {
			toDoList: workflow.toDoList,
			projects: projectsList,
		};
		localStorage.setItem("projectmanagerv3", JSON.stringify(newWorkflow));
		setWorkflow(newWorkflow);
	}

	function updateList(newData) {
		saveTaskChange(newData);
		setviewState(newData);
	}

	function mainViewHandler() {
		if (taskType === "project") {
			return (
				<TasksContainer
					workFlow={workflow}
					deleteProject={deleteProject}
					deleteTask={deleteTask}
					setTaskModal={setTaskModal}
					setAddTaskModal={setAddTaskModal}
					updateList={updateList}
					taskType={taskType}
					index={viewState.index}
					taskData={viewState}
					setviewState={setviewState}
					setSettingsPage={setSettingsPage}
					settingsPage={settingsPage}
					taskCardMenu={taskCardMenu}
					setTaskCardMenu={setTaskCardMenu}
				/>
			);
		} else if (taskType === "to-do-list") {
			return <ToDoList workflowData={workflow} />;
		}
	}

	function addTaskModalHandler() {
		if (addTaskModal) {
			return (
				<AddTaskModal
					addTask={addTask}
					updateList={updateList}
					taskData={viewState}
					setAddTaskModal={setAddTaskModal}
				/>
			);
		} else {
			return "";
		}
	}

	function addTask(taskData) {
		let projectObject = {
			projectName: viewState.projectName,
			projectDescription: viewState.projectDescription,
			tasks: viewState.tasks,
		};
		console.log(taskData);
		projectObject.tasks.push(taskData);

		updateList(projectObject);
	}

	function deleteTask(taskID) {
		let projectObject = { ...viewState };
		let i;
		for (i = 0; i < projectObject.tasks.length; i++) {
			if (projectObject.tasks[i].taskID === taskID) {
				projectObject.tasks.splice(i, 1);
			}
		}
		console.log(taskID);
		updateList(projectObject);
	}

	function moveTask(sendLocation, removeLocation, data, indexOfRemove) {
		addTask(sendLocation, data);
		deleteTask(removeLocation, indexOfRemove);
	}

	function taskModalHandler() {
		if (taskModal) {
			return (
				<TaskModal
					updateList={updateList}
					viewState={viewState}
					moveTask={moveTask}
					data={taskModal}
					setTaskModal={setTaskModal}
				/>
			);
		} else {
			return "";
		}
	}

	function deleteProject() {
		let projects = workflow.projects;
		let newWorkflow = {
			toDoList: workflow.toDoList,
			projects: projects,
		};
		projects.splice(viewState.index, 1);
		setWorkflow(newWorkflow);
		setviewState(
			newWorkflow.projects[viewState.index > 0 ? viewState.index - 1 : 0]
		);
		localStorage.setItem("projectmanagerv3", JSON.stringify(newWorkflow));
	}

	function addProject() {
		let newProjects = workflow.projects;
		let newProjectTitle = document.querySelector(".project-title-input").value;
		newProjects.push({
			projectName: newProjectTitle,
			projectDescription: "A Default Description For Now.",
			tasks: [],
		});

		setWorkflow({
			toDoList: workflow.toDoList,
			projects: newProjects,
		});
		setAddProjectModal(false);
	}

	function handleAddProject() {
		let projectTitleInput = document.querySelector(
			".project-title-input"
		).value;
		if (projectTitleInput.length <= 0) {
			alert("Please enter a project title");
		} else {
			addProject();
		}
	}

	function renderAddProjectModal() {
		if (addProjectModal) {
			return (
				<div className="add-project-modal-container">
					<input placeholder="Project Title" className="project-title-input" />
					<button
						className="submit-project-button"
						onClick={() => {
							handleAddProject();
						}}
					>
						Add Project
					</button>
					<button
						className="close-add-project-modal-buton"
						onClick={() => {
							setAddProjectModal(false);
						}}
					>
						X
					</button>
				</div>
			);
		}
	}

	function renderTaskMenu() {
		if (taskCardMenu.opened) {
			return (
				<div
					className="task-card-menu-container"
					style={{
						left: taskCardMenu.position.x,
						top: taskCardMenu.position.y,
					}}
				>
					<button
						onClick={() => {
							deleteTask(taskCardMenu.taskID);
							setTaskCardMenu({
								opened: false,
								taskID: undefined,
								position: undefined,
							});
						}}
					>
						Delete
					</button>
				</div>
			);
		}
	}

	function toggleMobileNavBar() {
		setMobileNavBar(!mobileNavBar);
		console.log("test");
	}

	function renderMobileNavBar() {
		let overlayElement = document.querySelector(".mobile-overlay");
		console.log("RENDER TEST");
		console.log(mobileNavBar);

		if (overlayElement != null) {
			if (mobileNavBar) {
				overlayElement.style.display = "none";
				return "-1000px";
			} else {
				overlayElement.style.display = "inline-block";
				return "0%";
			}
		}

		console.log();
	}

	return (
		<div className="App">
			{addTaskModalHandler()}
			{taskModalHandler()}
			{renderAddProjectModal()}
			{renderTaskMenu()}

			<div className="nav-bar-container">
				<div className="mobile-nav-bar-button-wrapper">
					<div className="mobile-nav-bar-button" onClick={toggleMobileNavBar}>
						<i class="fas fa-bars"></i>
					</div>
				</div>
				<div className="nav-bar-wrapper">
					<div className="nav-bar-header">WORKFLOW</div>

					<div className="nav-link-section">
						<div className="nav-link-section-header">General</div>

						<div className="nav-links-container">
							<NavLink
								type="general"
								toDoList={workflow.toDoList}
								changeView={changeView}
								taskType={taskType}
							/>
						</div>
					</div>

					<div className="nav-link-section">
						<div className="nav-link-section-header">
							Projects{" "}
							<button
								onClick={() => {
									setAddProjectModal(true);
								}}
								className="add-project-button"
							>
								ADD PROJECT +
							</button>
						</div>
						<div className="nav-links-container">
							{workflow.projects.map((project, index) => (
								<NavLink
									type="project"
									index={index}
									viewState={viewState}
									setTaskType={setTaskType}
									changeView={changeView}
									projectData={project}
								/>
							))}
						</div>
					</div>

					<div className="nav-footer-container">Settings</div>
				</div>
			</div>

			<div className="mobile-nav-bar-container">
				<div
					className="mobile-overlay"
					onClick={() => {
						toggleMobileNavBar();
					}}
				></div>
				<div
					className="mobile-nav-bar-content"
					style={{ left: renderMobileNavBar() }}
				>
					<div className="nav-bar-header">WORKFLOW</div>

					<div className="nav-link-section">
						<div className="nav-link-section-header">General</div>

						<div className="nav-links-container">
							<NavLink
								type="general"
								toDoList={workflow.toDoList}
								changeView={changeView}
								taskType={taskType}
							/>
						</div>
					</div>

					<div className="nav-link-section">
						<div className="nav-link-section-header">
							Projects{" "}
							<button
								onClick={() => {
									setAddProjectModal(true);
								}}
								className="add-project-button"
							>
								ADD PROJECT +
							</button>
						</div>
						<div className="nav-links-container">
							{workflow.projects.map((project, index) => (
								<NavLink
									type="project"
									index={index}
									viewState={viewState}
									setTaskType={setTaskType}
									changeView={changeView}
									projectData={project}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="main-view-container">
				<div className="main-view-wrapper">
					<div className="main-view-header">
						<span className="main-view-header-text">
							{viewState.projectName ? viewState.projectName : "TO DO LIST"}
						</span>
						<button
							className="project-settings-button"
							onClick={() => {
								setSettingsPage(true);
							}}
						>
							Settings
						</button>
					</div>

					{mainViewHandler()}
				</div>
			</div>
		</div>
	);
}

export default App;
