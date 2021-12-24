import {io} from 'socket.io-client';
import {useContext, useEffect, useRef, useState} from 'react';
import Sidebar from '../../../components/main/Messenger/Sidebar';
import ChatBox from '../../../components/main/Messenger/ChatBox';
import './Messenger.css';
import { AuthContext } from '../../../context/Authentication';
import { getAllConversations, getConversation} from '../../../api/services';

const Messenger = props => {
    
    const socket = useRef();
    const {authData} = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [currentConv, setCurrentConv] = useState(null);

    
    useEffect(() => {

        // socket.current = io("ws://localhost:3333");
        
        // socket.current.on('message', message => {

        //     setMessages([...messages, message]);
        // });

        // createConversation(authData.user._id,  '61b818da2fa3d3fe0255679b');


        getData();

    }, []);


    const getData = async () => {

        try {
            const conversations = await getAllConversations(authData.user._id);
            const messages = await getConversation(conversations[0]._id);
            setConversations(conversations);
            setCurrentConv(conversations[0]);
        } catch (error) {
            console.log(error);
        }
    }

    return <div className='row mx-auto p-0 w-75'>
        
        <div className='col-3 p-3'>
            <div className='bg-msg round'>
                <Sidebar />
            </div>
        </div>
        

        <div className='col-9 p-3'>
            <div className='bg-msg round'>
                <ChatBox currentConv = {currentConv}/>
            </div>
        </div>

    </div>
}


export default Messenger;