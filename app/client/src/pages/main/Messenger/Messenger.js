import {io} from 'socket.io-client';
import {useEffect, useRef} from 'react';

const Messenger = props => {
    
    const socket = useRef();

    useEffect(() => {

        socket.current = io("ws://localhost:3333");
        socket.current.emit("message", {message: "fsfsdfd"});
    }, []);

    return <div className="fdkdsh">
        fsdfd
    </div>
}


export default Messenger;