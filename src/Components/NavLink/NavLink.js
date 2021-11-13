import React from 'react';
import "./NavLink.css"


const NavLink = (props) => {


  
    


    if(props.type === 'project'){
        function navLinkStyler(){
            if(props.viewState.projectName === props.projectData.projectName){
                return('nav-link nav-selected')
            }
    
            else{
                return('nav-link')
            }
        }

        let newObject = {...props.projectData}
        newObject.index = props.index



        return ( <div className={navLinkStyler()} onClick={() => {props.changeView(newObject, 'project')}}>{props.projectData.projectName}</div> );

    }

    else if(props.type === 'general'){


        function navLinkStyler(){
            if(props.taskType === 'to-do-list'){
                return('nav-link nav-selected')
            }
    
            else{
                return('nav-link')
            }
        }



        return(<div className={navLinkStyler()} onClick={() => {props.changeView(props.toDoList, 'to-do-list')}}>To Do List</div>)
    }

    
}
 
export default NavLink;