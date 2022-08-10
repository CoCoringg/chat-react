import React, { useEffect, useState } from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import ChatRoomList from './ChatRoomList';
import ChatMessageList from './ChatMessageList';
import axios from 'axios';

const Chat = () => {

    const [chatRoomId, setChatRoomId] = useState(-1);
    const [roomList, setRoomList] = useState([]);
    const [roomName, setRoomName] = useState('');

    const chatMessage = (id) => {
        console.log("chatRoomId: "+id);
        setChatRoomId(id);
    };

    useEffect(()=>{
        console.log("!!!!!");
        axios.get('http://localhost:8080/api/chat/rooms')
            .then((resp)=>{
            // console.log(resp.data.data);
            setRoomList(resp.data.data);
        })
    },[]);

    // useEffect(()=>{
    //     console.log("바뀜??", roomList);
    // },[roomList]);


    return (
        <section style={{ backgroundColor: '#CDC4F9' }}>
            <div className="container py-5 row">
                <div className="card col-md-12 " style={{ marginLeft: '10%' }}>
                    <div className="card-body row" id="chat3" style={{ borderRadius: '15px' }}>
                        { /**컴포넌트,,? */}

                        <ChatRoomList 
                            chatRoomId={chatRoomId} 
                            chatMessage={chatMessage}
                            roomList={roomList}
                            setRoomName={setRoomName}/>
                        <ChatMessageList chatRoomId={chatRoomId} roomName={roomName} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chat;