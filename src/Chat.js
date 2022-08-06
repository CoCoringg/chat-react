import React from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import ChatRoomList from './ChatRoomList';
import ChatMessageList from './ChatMessageList';

const Chat = () => {
    return (
        <section style={{ backgroundColor: '#CDC4F9' }}>
            <div className="container py-5 row">
                <div className="card col-md-12 " style={{ marginLeft: '10%' }}>
                    <div className="card-body row" id="chat3" style={{ borderRadius: '15px' }}>
                        { /**컴포넌트,,? */}
                        
                        <ChatRoomList />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chat;