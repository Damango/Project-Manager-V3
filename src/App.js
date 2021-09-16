
import './App.css';
import {useState, useEffect} from 'react'
import NavLink from "./Components/NavLink/NavLink"
import TasksContainer from './Components/TasksContainer/TasksContainer';
import AddTaskModal from './Components/AddTaskModal/AddTaskModal';
import TaskModal from './Components/TaskModal/TaskModal';



function App() {





/*localStorage.setItem('projectmanagerv3', JSON.stringify({
  toDoList: ['Do sumin','neva mind'],
  projects:[
    {projectName: 'Phidom',
    projectDescription: 'A React UI Library that I will license out to people',
  toDoTasks:[{taskTitle: 'Create Passive Income',
              taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40}],
inProgressTasks:[],
stuckTasks:[],
completeTasks:[]},



{projectName: 'Black Box',
projectDescription: 'A React UI Library that I will license out to people',
toDoTasks:[],
inProgressTasks:[],
stuckTasks:[],
completeTasks:[]},


{projectName: 'PC Builder',
projectDescription: 'A React UI Library that I will license out to people',
toDoTasks:[],
inProgressTasks:[],
stuckTasks:[],
completeTasks:[]}
  ]
}))*/



const [workflow, setWorkflow] = useState(JSON.parse(localStorage.getItem('projectmanagerv3')))

const [viewState, setviewState] = useState(workflow.toDoList);
const [taskType, setTaskType] = useState('to-do-list');
const [addTaskModal, setAddTaskModal] = useState(false)
const [taskModal, setTaskModal] = useState()




function changeView(data, type){
  setviewState(data)
  setTaskType(type)
}

function saveTaskChange(project){

  let projectsList = workflow.projects;
  let projectIndex = projectsList.map(function(e) { return e.projectName; }).indexOf(project.projectName);
  projectsList[projectIndex] = project;
  let newWorkflow = {
    toDoList: workflow.toDoList,
    projects: projectsList
  }
  localStorage.setItem('projectmanagerv3', JSON.stringify(newWorkflow))
  setWorkflow(newWorkflow)

}

function updateList(newData){

   saveTaskChange(newData)
   setviewState(newData)
   
}


function mainViewHandler(){
  if(taskType === 'project'){
    return( <TasksContainer deleteTask={deleteTask} setTaskModal={setTaskModal} setAddTaskModal={setAddTaskModal} updateList={updateList} taskType={taskType} taskData={viewState} setviewState={setviewState}/>)
  }
  else if(taskType === 'to-do-list'){
    return (<div>to do list</div>)
  }
}


function addTaskModalHandler(){
  if(addTaskModal){
    return(<AddTaskModal addTask={addTask} updateList={updateList} taskData={viewState} updateList={updateList} setAddTaskModal={setAddTaskModal}/>)
  }
  else{
    return('')
  }
}



function addTask(taskPlace, data){

  let newObject = {
    projectName: viewState.projectName,
    projectDescription: viewState.projectDescription,
    toDoTasks: viewState.toDoTasks,
    inProgressTasks: viewState.inProgressTasks,
    stuckTasks: viewState.stuckTasks,
    completeTasks: viewState.completeTasks,

  }

  let newTask;


  if(data){
    newTask = data;
  }

  else{
    newTask = {
      taskTitle: document.querySelector('.task-title-input').value,
        taskDescription: document.querySelector('.task-description-input').value, taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: Math.floor(Math.random() * 2000)
  }
  }

  
  if(taskPlace === 'to-do'){
    newObject.toDoTasks.push(newTask)
   

  }
  else if(taskPlace === 'in-progress'){
    newObject.inProgressTasks.push(newTask)
  }

  else if(taskPlace === 'stuck'){
    newObject.stuckTasks.push(newTask)
  }

  else if(taskPlace === 'complete'){
    newObject.completeTasks.push(newTask)
  }
  updateList(newObject)
}





function deleteTask(place, index){


  let newObject = {
    projectName: viewState.projectName,
    projectDescription: viewState.projectDescription,
    toDoTasks: viewState.toDoTasks,
    inProgressTasks: viewState.inProgressTasks,
    stuckTasks: viewState.stuckTasks,
    completeTasks: viewState.completeTasks,

  }




  if(place === 'to-do'){
    newObject.toDoTasks.splice(index, 1)
  }
  if(place === 'in-progress'){
    newObject.inProgressTasks.splice(index, 1)
  }


  if(place === 'stuck'){
    newObject.stuckTasks.splice(index, 1)
  }


  if(place === 'complete'){
    newObject.completeTasks.splice(index, 1)
  }



  updateList(newObject)


}


function moveTask(sendLocation, removeLocation, data, indexOfRemove){

  console.log(data)

  addTask(sendLocation, data);
  deleteTask(removeLocation, indexOfRemove)

 



}










function taskModalHandler(){
  if(taskModal){
    return(<TaskModal moveTask={moveTask} data={taskModal} setTaskModal={setTaskModal}/>)
  }
  else{
    return('')
  }
}

function addProject(){

  let newProjects = workflow.projects;
  newProjects.push({projectName: 'Project Manager',
  projectDescription: 'A React UI Library that I will license out to people',
  toDoTasks:[],
  inProgressTasks:[],
  stuckTasks:[],
  completeTasks:[]})



  setWorkflow({
    toDoList: ['if'],
    projects: newProjects
  })

}


  return (
    <div className="App">
      {addTaskModalHandler()}
      {taskModalHandler()}

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div className="nav-bar-header">WORKFLOW</div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">General</div>

            <div className="nav-links-container">
              <NavLink type='general' toDoList={workflow.toDoList} changeView={changeView} taskType={taskType}/>
              
            </div>
          </div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">Projects <button onClick={addProject} className="add-project-button">ADD PROJECT +</button></div>
            <div className="nav-links-container">
            {workflow.projects.map((project, index) => <NavLink type='project' index={index} viewState={viewState} setTaskType={setTaskType} changeView={changeView} projectData={project}/>)}
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
