
import './App.css';
import { useState, useEffect } from 'react'
import NavLink from "./Components/NavLink/NavLink"
import TasksContainer from './Components/TasksContainer/TasksContainer';
import AddTaskModal from './Components/AddTaskModal/AddTaskModal';
import TaskModal from './Components/TaskModal/TaskModal';
import ToDoList from './Components/ToDoList/ToDoList';


function App() {





  /*localStorage.setItem('projectmanagerv3', JSON.stringify())

  */



  const [workflow, setWorkflow] = useState(JSON.parse(localStorage.getItem('projectmanagerv3')))

  const [viewState, setviewState] = useState(workflow.toDoList);
  const [taskType, setTaskType] = useState('to-do-list');
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [taskModal, setTaskModal] = useState();
  const [addProjectModal, setAddProjectModal] = useState(false)





  function changeView(data, type) {
    setviewState(data)
    setTaskType(type)
  }

  function saveTaskChange(project) {

    let projectsList = workflow.projects;
    let projectIndex = projectsList.map(function (e) { return e.projectName; }).indexOf(project.projectName);
    projectsList[projectIndex] = project;
    let newWorkflow = {
      toDoList: workflow.toDoList,
      projects: projectsList
    }
    localStorage.setItem('projectmanagerv3', JSON.stringify(newWorkflow))
    setWorkflow(newWorkflow)

  }

  function updateList(newData) {
    saveTaskChange(newData)

    setviewState(newData)
  }


  function mainViewHandler() {
    if (taskType === 'project') {
      return (<TasksContainer deleteTask={deleteTask} setTaskModal={setTaskModal} setAddTaskModal={setAddTaskModal} updateList={updateList} taskType={taskType} taskData={viewState} setviewState={setviewState} />)
    }
    else if (taskType === 'to-do-list') {
      return (<ToDoList workflowData={workflow}/>)
    }
  }


  function addTaskModalHandler() {
    if (addTaskModal) {
      return (<AddTaskModal addTask={addTask} updateList={updateList} taskData={viewState} updateList={updateList} setAddTaskModal={setAddTaskModal} />)
    }
    else {
      return ('')
    }
  }



  function addTask(taskPlace, data) {

    let newObject = {
      projectName: viewState.projectName,
      projectDescription: viewState.projectDescription,
      toDoTasks: viewState.toDoTasks,
      inProgressTasks: viewState.inProgressTasks,
      stuckTasks: viewState.stuckTasks,
      completeTasks: viewState.completeTasks,
    }
    let newTask;
    if (data) {
      newTask = data;
      console.log(viewState)
    }
    else {
      newTask = {
        taskTitle: document.querySelector('.task-title-input').value,
        taskDescription: document.querySelector('.task-description-input').value, taskTags: ['Bussiness', 'Development'], subTasks: [1], taskID: Math.floor(Math.random() * 2000)
      }
    }

    if (taskPlace === 'to-do') {
      newObject.toDoTasks.push(newTask)
    }
    else if (taskPlace === 'in-progress') {
      newObject.inProgressTasks.push(newTask)
    }

    else if (taskPlace === 'stuck') {
      newObject.stuckTasks.push(newTask)
    }

    else if (taskPlace === 'complete') {
      newObject.completeTasks.push(newTask)
    }
    updateList(newObject)
  }

  function deleteTask(place, index) {

    let newObject = {
      projectName: viewState.projectName,
      projectDescription: viewState.projectDescription,
      toDoTasks: viewState.toDoTasks,
      inProgressTasks: viewState.inProgressTasks,
      stuckTasks: viewState.stuckTasks,
      completeTasks: viewState.completeTasks,
    }

    if (place === 'to-do') {
      newObject.toDoTasks.splice(index, 1)
    }
    if (place === 'in-progress') {
      newObject.inProgressTasks.splice(index, 1)
    }

    if (place === 'stuck') {
      newObject.stuckTasks.splice(index, 1)
    }
    if (place === 'complete') {
      newObject.completeTasks.splice(index, 1)
    }
    updateList(newObject)

  }


  function moveTask(sendLocation, removeLocation, data, indexOfRemove) {

    addTask(sendLocation, data);
    deleteTask(removeLocation, indexOfRemove)

  }


  function taskModalHandler() {
    if (taskModal) {
      return (<TaskModal moveTask={moveTask} data={taskModal} setTaskModal={setTaskModal} />)
    }
    else {
      return ('')
    }
  }

  function addProject() {

    let newProjects = workflow.projects;
    let newProjectTitle = document.querySelector('.project-title-input').value
    newProjects.push({
      projectName: newProjectTitle,
      projectDescription: 'A React UI Library that I will license out to people',
      toDoTasks: [],
      inProgressTasks: [],
      stuckTasks: [],
      completeTasks: []
    })



    setWorkflow({
      toDoList: ['if'],
      projects: newProjects
    })
    setAddProjectModal(false)

  }

  function renderAddProjectModal() {
    if (addProjectModal) {
      return (<div className="add-project-modal-container">
        <input placeholder="Project Title" className="project-title-input" />
        <button onClick={addProject}>Submit</button>
        <button onClick={() => {setAddProjectModal(false)}}>X</button>
      </div>)
    }
  }


  return (
    <div className="App">
      {addTaskModalHandler()}
      {taskModalHandler()}
      {renderAddProjectModal()}

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div className="nav-bar-header">WORKFLOW</div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">General</div>

            <div className="nav-links-container">
              <NavLink type='general' toDoList={workflow.toDoList} changeView={changeView} taskType={taskType} />

            </div>
          </div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">Projects <button onClick={() => { setAddProjectModal(true) }} className="add-project-button">ADD PROJECT +</button></div>
            <div className="nav-links-container">
              {workflow.projects.map((project, index) => <NavLink type='project' index={index} viewState={viewState} setTaskType={setTaskType} changeView={changeView} projectData={project} />)}
            </div>
          </div>

          <div className="nav-footer-container">Settings</div>

        </div>

      </div>

      <div className="main-view-container">
        <div className="main-view-wrapper">
          <div className="main-view-header">{viewState.projectName}</div>

          {mainViewHandler()}

        </div>
      </div>

    </div>
  );
}

export default App;
