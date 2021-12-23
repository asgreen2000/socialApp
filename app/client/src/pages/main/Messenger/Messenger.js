import {io} from 'socket.io-client';
import {useEffect, useRef, useState} from 'react';
import Sidebar from '../../../components/main/Messenger/Sidebar';
import ChatBox from '../../../components/main/Messenger/ChatBox';
import './Messenger.css';

const Messenger = props => {
    
    const socket = useRef();
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {

        // socket.current = io("ws://localhost:3333");
        
        // socket.current.on('message', message => {

        //     setMessages([...messages, message]);
        // });

    }, [messages]);

    return <div className='row mx-auto p-0 w-75'>
        
        <div className='col-4 p-3'>
            <div className='bg-msg round'>
                <Sidebar />
            </div>
        </div>
        

        <div className='col-8 p-3'>
            <div className='bg-msg round'>
                <ChatBox />
            </div>
        </div>

    </div>
}


export default Messenger;