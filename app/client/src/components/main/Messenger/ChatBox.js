import { useContext, useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import { AuthContext } from "../../../context/Authentication";
import { getConversation, addMessage} from "../../../api/services";

const ChatBox = ({currentConv}) => {
    
    const {authData} = useContext(AuthContext);
    
    const msgEnd = useRef(null);
    const [messages, setMessages] = useState([]);
    const [newMsg, setNewMsg] = useState("");

    const scrollToBottom = () => {
        msgEnd.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {

        scrollToBottom();
        
    }, []);

    useEffect(() => {

        getMessages();
    }, [currentConv]);

    const getMessages = async () => {

        try {
            const data = await getConversation(currentConv._id);
            console.log(data);
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnChange = event => {

        setNewMsg(event.target.value);
        console.log(newMsg);
    }

    const handleOnSend = event => {
        
        addMessage(currentConv._id, authData.user._id, newMsg);
        setNewMsg("");
        getMessages();
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
                <div className="input-group-prepend">
                    <span className="input-group-text h-100"><i className="fas fa-paper-plane text-primary"
                    onClick={handleOnSend}
                    ></i></span>
                </div>                                
            </div>
        </div>
    </div>
}

export default ChatBox;