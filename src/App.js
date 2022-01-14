
import './App.css';
import { useState, useEffect } from 'react'
import NavLink from "./Components/NavLink/NavLink"
import TasksContainer from './Components/TasksContainer/TasksContainer';
import AddTaskModal from './Components/AddTaskModal/AddTaskModal';
import TaskModal from './Components/TaskModal/TaskModal';
import ToDoList from './Components/ToDoList/ToDoList';


function App() {





  /*localStorage.setItem('projectmanagerv3', JSON.stringify({
    toDoList: ['test'],
    projects:[]
  }))*/

  



  const [workflow, setWorkflow] = useState(JSON.parse(localStorage.getItem('projectmanagerv3')))

  const [viewState, setviewState] = useState(workflow.toDoList);
  const [taskType, setTaskType] = useState('to-do-list');
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [taskModal, setTaskModal] = useState();
  const [addProjectModal, setAddProjectModal] = useState(false)
  const [settingsPage, setSettingsPage] = useState(false)





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
      return (<TasksContainer workFlow={workflow} deleteProject={deleteProject} deleteTask={deleteTask} setTaskModal={setTaskModal} setAddTaskModal={setAddTaskModal} updateList={updateList} taskType={taskType} index={viewState.index} taskData={viewState} setviewState={setviewState} setSettingsPage={setSettingsPage} settingsPage={settingsPage}/>)
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



  function addTask(taskData) {


    let projectObject = {
      projectName: viewState.projectName,
      projectDescription: viewState.projectDescription,
      tasks: viewState.tasks
    }
    console.log(taskData)
    projectObject.tasks.push(taskData)

    updateList(projectObject)
  }

  function deleteTask(taskID, index) {


    let projectObject = {...viewState}


    let i;
    for(i = 0; i < projectObject.tasks.length; i++){
      if(projectObject.tasks[i].taskID === taskID){
        projectObject.tasks.splice(i, 1)
      }
    }

    console.log(taskID)


    

    updateList(projectObject)
  }


  function moveTask(sendLocation, removeLocation, data, indexOfRemove) {

    addTask(sendLocation, data);
    deleteTask(removeLocation, indexOfRemove)

  }


  function taskModalHandler() {
    if (taskModal) {
      
      return (<TaskModal updateList={updateList} viewState={viewState} moveTask={moveTask} data={taskModal} setTaskModal={setTaskModal} />)
    }
    else {
        return ('')
    }
  }

 function deleteProject(){
   
  let projects = workflow.projects;
  let newWorkflow = {
    toDoList: workflow.toDoList,
    projects: projects
  }
  projects.splice(viewState.index, 1)
  setWorkflow(newWorkflow)



  setviewState(newWorkflow.projects[viewState.index > 0 ? viewState.index - 1 : 0])





  localStorage.setItem('projectmanagerv3', JSON.stringify(newWorkflow))

 }

  function addProject() {

    let newProjects = workflow.projects;
    let newProjectTitle = document.querySelector('.project-title-input').value
    newProjects.push({
      projectName: newProjectTitle,
      projectDescription: 'A Default Description For Now.',
      tasks:[],
      
    })



    setWorkflow({
      toDoList: workflow.toDoList,
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
          <div className="main-view-header">{viewState.projectName} <button onClick={() => {setSettingsPage(true)}}>Settings</button></div>

          {mainViewHandler()}

        </div>
      </div>

    </div>
  );
}

export default App;
