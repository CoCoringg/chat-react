import React, { useState } from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import ChatMessageList from './ChatMessageList';
import { Link } from 'react-router-dom';

const ChatRoom = ({selected, chatRoomName, roomNo, callback}) => {
    console.log(selected, chatRoomName, roomNo);

    const roomClick = () => {
        callback(roomNo);
        // callback(chatRoomName);
    };

    return (
        <div>
        <li className="p-2 border-bottom">
            <div className="d-flex justify-content-between" >
                <div className="d-flex flex-row" onClick={roomClick} style={{backgroundColor: selected ? "#f00" : "#fff"}}>
                    <div>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar" className="d-flex align-self-center me-3" width="60" />
                    </div>
                    <div className="pt-1">
                        <p className="fw-bold mb-0">{chatRoomName}</p>
                        <p className="small text-muted">Hello, Are you there?</p>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="small text-muted mb-1">Just now</p>
                    <span className="badge bg-danger rounded-pill float-end">3</span>
                </div>
            </div>
        </li>
        
        
        </div>
        
    );
};

export default ChatRoom;