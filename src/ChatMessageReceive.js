import React from 'react';

const ChatMessageReceive = ({content, senderType, time, date}) => {
    return (
        <div className={`d-flex flex-row justify-content-start`}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
            <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
                {content}</p>
            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{time} | {date}</p>
        </div>


    );
};

export default ChatMessageReceive;