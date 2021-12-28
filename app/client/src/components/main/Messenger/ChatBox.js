import { useContext, useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import { AuthContext } from "../../../context/Authentication";
import { getConversation, addMessage} from "../../../api/services";
import {io} from 'socket.io-client';

const ChatBox = ({currentConv}) => {
    
    const {authData} = useContext(AuthContext);
    
    const msgEnd = useRef(null);
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState("");
    const [arrivalMsg, setArrivalMsg] = useState(null);
    const socket = useRef(null);

    const scrollToBottom = () => {
        msgEnd.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {

        socket.current = io("ws://localhost:3333");
        
        socket.current.on("getMessage", (data) => {
            console.log(data);
            setArrivalMsg({
              sender: data.senderID,
              text: data.text,
              createdAt: Date.now(),
            });
        });



    }, []);

    useEffect(() => {


        if (arrivalMsg && currentConv.members.includes(arrivalMsg.sender))
        {
            setMessages([...messages, arrivalMsg]);
        }

    }, [arrivalMsg]);



    useEffect(() => {

            
        getMessages();
        
    }, [currentConv]);

    useEffect(() => {

        scrollToBottom();   
    }, [messages]);

    useEffect(() => {

        socket.current.emit("addUser", authData.user._id);
        // socket.current.on("getUsers", (users) => {
        // setOnlineUsers(
        //     user.followings.filter((f) => users.some((u) => u.userId === f))
        // );
        // });

    }, [authData]);

    const getMessages = async () => {

        try {
            const data = await getConversation(currentConv._id);
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnChange = event => {

        setNewMsg(event.target.value);
        
    }

    const handleOnSend = event => {
        
        const data = {
            conversationId: currentConv._id,
            sender: authData.user._id,
            text: newMsg
        }

        addMessage(data);

        const receiverID = currentConv.members.find(
            (member) => member !== authData.user._id
        );
        
        socket.current.emit("sendMessage", {
            senderID: authData.user._id,
            receiverID,
            text: newMsg,
        });

          
        setMessages([...messages, data]);
        setNewMsg("");
        
        
    }

    return <div className="height-middle p-2">
        <div className='chatbox-header py-2 px-1 d-flex'>
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className='me-2'/>
            <div className="about">
                <div className="name">Aiden Chavez</div>
                <div className="status"> <i className="fa fa-circle online"></i> online </div>
            </div>
        </div>
        <div className="chatbox-content">
            <ul className="m-0 px-2 py-1">
                {/* <li className="right py-2">          
                    <div className="message p-2 w-50"> Hi Aiden, how are you? How is the project coming along? </div>
                </li>
                <li className="left py-2">          
                    <div className="message p-2 w-50"> Hi Aiden, how are you? How is the project coming along? </div>
                </li> */}
                {
                    messages.map((message, index) => {
                        
                        
                        return  <li className={"py-2 " + (message.sender === authData.user._id ?
                        'right' : 'left')}
                        key={index}
                        >          
                            <div className="message p-2 w-50"> {message.text} </div>
                        </li>
                    })
                }


                <div ref={msgEnd} />
            </ul>
        </div>

        <div className="">
            <div className="input-group mb-0">
                <input type="text" className="form-control" placeholder="Enter text here..."
                value={newMsg} onChange={handleOnChange}
                />    
                <div className="input-group-prepend" onClick={handleOnSend}>
                    <span className="input-group-text h-100"><i className="fas fa-paper-plane text-primary"
                    
                    ></i></span>
                </div>                                
            </div>
        </div>
    </div>
}

export default ChatBox;