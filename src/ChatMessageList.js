import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import plane from './assets/images/plane.png';

const ChatMessageList = ({messageList}) => {
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        //connect();

        //return () => disconnect();
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
            console.log("??", data.body);
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
            body: JSON.stringify({ roomSeq: ROOM_SEQ, message: message, sender: name }),
        });

        setMessage("");
    };

    const [comm, setComm] = useState('start');



    return (
        <div >
            <div className="bar pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                style={{ position: 'relative', height: '400px'}}>
                <div className={`d-flex flex-row justify-content-${comm}`}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                    <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
                            시작??{messageList}</p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-end">
                    <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            끝??</p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                </div>
            </div>

            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 3" style={{ width: '40px', height: '100%' }} />
                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                    placeholder="Type message" />
                <a className="ms-3" href="#!"><img src={plane} alt="" style={{ width: '30px' }} /></a>
            </div>
            

        </div>
    );
};

export default ChatMessageList;