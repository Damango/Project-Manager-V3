
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
  toDoTasks:['asd'],
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
          <div className="nav-links-container">
            <div className="nav-link" onClick={() => {changeView(workflowData.toDoList, 'to-do-list')}}>To Do List</div>
          </div>
          <div className="nav-links-container">
           {workflowData.projects.map((project) => <NavLink setTaskType={setTaskType} changeView={changeView} projectData={project}/>)}
          </div>

          <div className="nav-footer-container">Settings</div>

        </div>
        
      </div>

      <div className="main-view-container">
        <div className="main-view-wrapper">
          <div className="main-view-header">
            Project 1
            <button className="settings-button"></button>
            </div>

            <TasksContainer taskType={taskType} taskData={taskData} setTaskData={setTaskData}/>
            <div className="all-tasks-container">
              <div className="todo-tasks"></div>
              <div className="in-progress-tasks"></div>
              <div className="stuck-tasks"></div>
              <div className="complete-tasks"></div>
            </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
