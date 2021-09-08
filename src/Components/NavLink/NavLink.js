import React from 'react';
import "./NavLink.css"


const NavLink = (props) => {
    return ( <div className="nav-link" onClick={() => {props.changeView(props.projectData, 'project')}}>{props.projectData.projectName}</div> );
}
 
export default NavLink;