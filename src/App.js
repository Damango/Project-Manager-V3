
import './App.css';






function App() {





localStorage.setItem('projectmanagerv3', JSON.stringify())







  return (
    <div className="App">

      <div className="nav-bar-container">
        <div className="nav-bar-wrapper">
          <div className="nav-bar-header">WORKFLOW</div>
          <div className="nav-links-container">
            <div className="nav-link">Project 1</div>
            <div className="nav-link">Project 1</div>
            <div className="nav-link">Project 1</div>
            <div className="nav-link">Project 1</div>
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
