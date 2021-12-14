import {io} from 'socket.io-client';
import {useEffect, useRef, useState} from 'react';

const Messenger = props => {
    
    const socket = useRef();
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {

        // socket.current = io("ws://localhost:3333");
        
        // socket.current.on('message', message => {

        //     setMessages([...messages, message]);
        // });

    }, [messages]);

    return <div>
        {
            messages.map(msg => <p>{msg}</p>)
        }
    </div>
}


export default Messenger;