import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

const ROOM_SEQ = 1;

const App = () => {
  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({
      //brokerURL: "ws://localhost:6379", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS("http://localhost:8080/ws/chat"),
      //webSocketFactory: () => new SockJS("http://localhost:6379"),
      //webSocketFactory: () => new SockJS("http://192.168.10.3:9090/ws/chat"), // proxy를 통한 접속
      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
      },
      debug: function (str) {
        console.log("!!!!!!", str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!연결??!");
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    console.log("여기");
    client.current.subscribe(`/topic/chat/room/test01`, (data) => {
      console.log("??",data.body);
       // const unit = new Uint8Array(data['_binaryBody']);
       // console.log(new TextDecoder("utf-8").decode(unit));
      //setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = (name, message) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/topic/chat/room/test01",
      body: JSON.stringify({ roomSeq: ROOM_SEQ, message: message, sender:name }),
    });

    setMessage("");
  };

  return (
    <div>
      {chatMessages && chatMessages.length > 0 && (
        <ul>
          {chatMessages.map((_chatMessage, index) => (
            <li key={index}>{_chatMessage.message}</li>
          ))}
        </ul>
      )}
      <div>
        <input type={"text"} placeholder={"name"} value={name} onChange={(e) => setName(e.target.value)} />
        <input
          type={"text"}
          placeholder={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <button onClick={() => publish(name,message)}>send</button>
      </div>
      <div><h3>{ message }</h3></div>
    </div>
  );
};

export default App;