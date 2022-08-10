import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import plane from './assets/images/plane.png';
import ChatMessageReceive from "./ChatMessageReceive";
import ChatMessageSend from "./ChatMessageSend";

const ROOM_SEQ = 1;

const ChatMessageList = ({ chatRoomId, roomName }) => {
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [senderType, setSenderType] = useState('start');
    const [content, setContent] = useState('');


    useEffect(() => {
        //connect();
        //console.log("roomID:"+chatRoomId);
        //return () => disconnect();

        if (chatRoomId == -1) {
            console.log("아직 방 안생김");
            return;
        }
        console.log; ("여기");
        connect();
    }, [chatRoomId]);

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
        client.current.subscribe(`/topic/chat/room/${roomName}`, (data) => {
            console.log("데이터가 온다", JSON.parse(data.body));
            const line = JSON.parse(data.body);
            console.log(line["sender"]);
            console.log(line["message"]);
            
            if (line["sender"] == "윤호") {
                setSenderType("end");
            }
            setContent(line["message"]);
            // const unit = new Uint8Array(data['_binaryBody']);
            // console.log(new TextDecoder("utf-8").decode(unit));
            //setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
        });
    };

    const publish = (name, message) => {
        if (!client.current.connected) {
            return;
        }

        let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
        let time = {
            year: today.getFullYear(),  //현재 년도
            month: today.getMonth() + 1, // 현재 월
            date: today.getDate(), // 현제 날짜
            hours: today.getHours(), //현재 시간
            minutes: today.getMinutes(), //현재 분
        };

        let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

        client.current.publish({
            destination: `/topic/chat/room/${roomName}`,
            body: JSON.stringify({ roomSeq: ROOM_SEQ, message: message, sender: name, date:timestring }),
        });

        setMessage("");
    };

    



    return (
        <div className="col-md-6 col-lg-7 col-xl-8">
            {chatRoomId != -1 ?
                <div>
                    <div className="bar pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                        style={{ position: 'relative', height: '400px' }}>
                       <ChatMessageReceive content={content} senderType={senderType}/>
                       <ChatMessageSend content={content}/>
                    </div>

                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 3" style={{ width: '40px', height: '100%' }} />
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                            placeholder="Type message" />
                        <a className="ms-3" href="#!"><img src={plane} alt="" style={{ width: '30px' }} /></a>
                    </div>
                    <div>
                        <input type={"text"} placeholder={"name"} value={name} onChange={(e) => setName(e.target.value)} />
                        <input
                            type={"text"}
                            placeholder={"message"}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.which === 13 && publish(message)}
                        />
                        <button onClick={() => publish(name, message)}>send</button>
                    </div>
                </div>
                :
                <div>
                    <h3>방 클릭해주셈욤</h3>
                </div>
            }


        </div>
    );
};

export default ChatMessageList;