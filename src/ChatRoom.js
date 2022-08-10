import React, { useState } from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import ChatMessageList from './ChatMessageList';
import { Link } from 'react-router-dom';

const ChatRoom = ({roomNo, chatRoomId,chatMessage, chatRoomName, setRoomName}) => {
    const roomClick = (e) => {
        e.preventDefault();
        console.log(roomNo);
        console.log(chatRoomName);
        chatMessage(roomNo);
        setRoomName(chatRoomName);
    };
    return (
        <div>
        <li className="p-2 border-bottom">
            <a href="/" className="d-flex justify-content-between" onClick={roomClick}>
                <div className="d-flex flex-row">
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
            </a>
        </li>
        
        
        </div>
        
    );
};

export default ChatRoom;