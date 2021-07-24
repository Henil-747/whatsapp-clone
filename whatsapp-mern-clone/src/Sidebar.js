import React from 'react'
import './Sidebar.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton, Avatar} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideChat from "./SideChat";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                    <IconButton>
                    <Avatar />
                    </IconButton>

                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlinedIcon />
                <input type="text" name="" placeholder="Search or start new chat"/>
            </div>
        </div>
        <div className="sidebar__chats">
             <SideChat addNewChat />
             <SideChat />
             <SideChat />
             <SideChat />
             <SideChat />
        </div>
        </div>
    )
}

export default Sidebar
