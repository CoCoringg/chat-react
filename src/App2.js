import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs/esm6';

function App2(props) {
    
    var sock = new SockJS('http://localhost:8080/chat')
    let client = Stomp.over(sock);
    let reconnect = 0;

    const connect = function connect() {
        // pub/sub event
        client.connect({}, function(frame) {
            console.log("connect~?");
            client.subscribe("/topic/chat/room/12", function(message) {
                var recv = JSON.parse(message.body);
                console.log(recv);
            });
            client.send("/app/chat/message", {}, JSON.stringify({type:'ENTER', roomId:vm.$data.roomId, sender:vm.$data.sender}));
        }, function(error) {
            if(reconnect++ <= 5) {
                setTimeout(function() {
                    console.log("connection reconnect");
                    sock = new SockJS("http://localhost:8080/chat");
                    ws = Stomp.over(sock);
                    connect();
                },10*1000);
            }
        });
    }

    connect();

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default App2;