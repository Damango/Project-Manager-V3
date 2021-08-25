import React from 'react';
import LinkItem from "./LinkItem/LinkItem"
import "./NavBar.css"

const NavBar = (props) => {
    return ( <div className="NavBar-container">

        <div className="NavBar-wrapper center-all">

            <div className="NavBar-header">
                <div className="NavBar-logo"><i class="fas fa-globe-americas center-all"></i></div>
                <div className="NavBar-collapse"><i class="fas fa-angle-double-left center-all"></i></div>
            </div>
            <div className="NavBar-body">

                {props.links.map((link) => <LinkItem data={link}/>)}

            </div>
            <div className="NavBar-footer">
                <LinkItem data={{linkName:"Settings"}}/>
            </div>
        </div>

    </div> );
}
 


NavBar.defaultProps = {
    links:[
        {linkName: "Dashboard",
        icon: <i class="fas fa-border-all"></i>},
        {linkName: "Content",
        icon:<i class="fas fa-envelope-open-text"></i> ,
        subLinks: [
            {
                linkName: 'Courses',
                icon: <i class="fab fa-codepen"></i>,
            },
            {
                linkName: 'Categories',
                icon: <i class="fab fa-codepen"></i>
            },
            {
                linkName: 'Instructors',
                icon: <i class="fab fa-codepen"></i>
            },
            {
                linkName: 'Video Library',
                icon: <i class="fab fa-codepen"></i>
            }
          
        ]},
        {linkName: "Design",
        icon: <i class="fas fa-pen-nib"></i>},
        {linkName: "Market & Sell",
        icon: <i class="fab fa-buffer"></i>},
        {linkName: "Reporting",
        icon: <i class="fas fa-atlas"></i>
    },
        {linkName: "Support",
        icon: <i class="fas fa-cog"></i>},
    ]
}
export default NavBar;