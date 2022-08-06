import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import SearchBar from './SearchBar';
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';

const ChatRoomList = () => {
    const [messageList, setMessageList ] = useState(''); 

    const ClickEvent = () => {
        setMessageList('one');
    }

    return (
        <div style={{display: 'flex'}}>
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-3" style={{flex:'1'}}>

                {/**검색바 */}
                <SearchBar />

                <div className="bar" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                    <ul className="list-unstyled mb-0">
                        {/**채팅방 */}
                        <ChatRoom callback={'one'} />
                        <ChatRoom callback={'two'}/>
                    </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-8" style={{flex:'1'}}>
                <ChatMessageList />
            </div>
        </div>
    );
};

export default ChatRoomList;