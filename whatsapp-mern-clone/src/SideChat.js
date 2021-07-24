import React from 'react'
import { Avatar } from '@material-ui/core';
import "./SidebarChat.css";
function SideChat({addNewChat}) {
    
    const createNewChat = () => {
        const roomName = prompt("Please Enter the Room Name for Chat")
    
        if (roomName){
            //do something
        }
    };
    
    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
            <h2>Title</h2>
            <p>This is last message</p>
            </div>
        </div>
    ):
    (
            <div onClick={createNewChat} className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
    )
}

export default SideChat;
