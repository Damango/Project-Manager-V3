
import './App.css';
import {useState, useEffect} from 'react'
import NavLink from "./Components/NavLink/NavLink"
import TasksContainer from './Components/TasksContainer/TasksContainer';





function App() {





/*localStorage.setItem('projectmanagerv3', JSON.stringify({
  toDoList: ['Do sumin','neva mind'],
  projects:[
    {projectName: 'Phidom',
    projectDescription: 'A React UI Library that I will license out to people',
  toDoTasks:[{taskTitle: 'Create Passive Income',
              taskDescription: 'Make sure you find a way to make some sort of money while you sleep', taskTags:['Bussiness', 'Development'], subTasks: [1], taskID: 40}, 'f', 'f','f','f','f'],
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
}))*/


let workflowData = JSON.parse(localStorage.getItem('projectmanagerv3'));


const [viewState, setviewState] = useState(workflowData.toDoList);
const [taskType, setTaskType] = useState('to-do-list');
const [counter, setCounter] = useState(1)




function changeView(data, type){
  setviewState(data)
  setTaskType(type)
  console.log(viewState)
}

function updateList(newData){

   setCounter(counter + 1)
   setviewState(newData)

}


function mainViewHandler(){
  if(taskType === 'project'){
    return( <TasksContainer updateList={updateList} taskType={taskType} taskData={viewState} setviewState={setviewState}/>)
  }
  else if(taskType === 'to-do-list'){
    return (<div>to do list</div>)
  }
}


  return (
    <div className="App">

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div className="nav-bar-header">WORKFLOW</div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">General</div>

            <div className="nav-links-container">
              <NavLink type='general' toDoList={workflowData.toDoList} changeView={changeView} taskType={taskType}/>
              
            </div>
          </div>


          <div className="nav-link-section">
            <div className="nav-link-section-header">Projects <button className="add-project-button">ADD PROJECT +</button></div>
            <div className="nav-links-container">
            {workflowData.projects.map((project) => <NavLink type='project' viewState={viewState} setTaskType={setTaskType} changeView={changeView} projectData={project}/>)}
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
