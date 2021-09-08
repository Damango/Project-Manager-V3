
import './App.css';
import {useState, useEffect} from 'react'
import NavLink from "./Components/NavLink/NavLink"
import TasksContainer from './Components/TasksContainer/TasksContainer';





function App() {





localStorage.setItem('projectmanagerv3', JSON.stringify({
  toDoList: ['Do sumin','neva mind'],
  projects:[
    {projectName: 'Phidom',
    projectDescription: 'A React UI Library that I will license out to people',
  toDoTasks:['asd', 'f', 'f','f','f','f'],
inProgressTasks:['sdf'],
stuckTasks:['dfg'],
completeTasks:['ghj']},



{projectName: 'Black Box',
projectDescription: 'A React UI Library that I will license out to people',
toDoTasks:['asd','f','f'],
inProgressTasks:['sdf','f', 'f','f'],
stuckTasks:['dfg'],
completeTasks:['ghj']},


{projectName: 'PC Builder',
projectDescription: 'A React UI Library that I will license out to people',
toDoTasks:['asd', 'f'],
inProgressTasks:['sdf'],
stuckTasks:['dfg'],
completeTasks:['ghj']}
  ]
}))


let workflowData = JSON.parse(localStorage.getItem('projectmanagerv3'));


const [taskData, setTaskData] = useState(workflowData.toDoList)
const [taskType, setTaskType] = useState('to-do-list')



function changeView(data, type){
  setTaskData(data)
  setTaskType(type)
}


  return (
    <div className="App">

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div className="nav-bar-header">WORKFLOW</div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">General</div>

            <div className="nav-links-container">
              <div className="nav-link nav-selected" onClick={() => {changeView(workflowData.toDoList, 'to-do-list')}}>To Do List</div>
            </div>
          </div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">Projects</div>
            <div className="nav-links-container">
            {workflowData.projects.map((project) => <NavLink setTaskType={setTaskType} changeView={changeView} projectData={project}/>)}
            </div>
          </div>

          <div className="nav-footer-container">Settings</div>

        </div>
        
      </div>

      <div className="main-view-container">
        <div className="main-view-wrapper">
          <div className="main-view-header">
            Project 1
           
            </div>

            <TasksContainer taskType={taskType} taskData={taskData} setTaskData={setTaskData}/>
            
        </div>
      </div>
     
    </div>
  );
}

export default App;
