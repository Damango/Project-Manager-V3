import React, {useState} from 'react';
import "./LinkItem.css"

const LinkItem = (props) => {


    const [linkDrawer, setLinkDrawer] = useState(false)

    console.log(props.data)


    function linkDrawerStyle(){
   /*     if(linkDrawer){
            return('link-drawer-open')
        }
        else{
            return('link-drawer-closed')
        }*/


        if(linkDrawer){

            if(document.querySelector('.sub-link') !== null){
                let subLinkHeight = document.querySelector('.sub-link').offsetHeight
                return({height: subLinkHeight * props.data.subLinks.length, marginTop: 10})
            }
            
         

          
        }

        else{
            return({height: 0})
        }

      
    }
    

    if(props.data.subLinks === undefined && props.data.subLink !== true){
        return( <div className="link-item-container">{props.data.icon} {props.data.linkName}</div>)
    }
    else if(props.data.subLink){
        return(<div className="link-item-container sub-link">{props.data.linkName}</div>)
    }

    else{

        return (  <div className="link-item-container" onClick={() => {if(linkDrawer){setLinkDrawer(false)} else{setLinkDrawer(true)}}}>
            <div className="link-item-header">{props.data.icon} {props.data.linkName} <i class="fas fa-chevron-down center-y"></i></div>
            <div className='link-drawer-open' style={linkDrawerStyle()}>

                {props.data.subLinks.map((subLink) => <LinkItem data={{linkName: subLink.linkName,icon: subLink.icon, subLink: true}}/>)}
               
            </div>
            </div>);
    }


 

   
}
 
export default LinkItem;