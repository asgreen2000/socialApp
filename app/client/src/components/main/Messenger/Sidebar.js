import Conversation from "./Conversation";
import "./Sidebar.css";

const Sidebar = ({conversations, setCurrentConv}) => {

    const changeCurrentConv = conversation => {
        
        setCurrentConv({...conversation});
    }

    return <div className="px-3 py-3 height-middle">
        
        <ul class="list-unstyled chat-list mt-2 mb-0">

            {
                conversations.map((conversation, index) => {

                    return  <li class="clearfix active d-flex mb-3" key={index}
                    onClick={() => changeCurrentConv(conversation)}
                    >
                    <Conversation conversation={conversation}/>
                </li>
                }) 
            }

           
                        
        </ul>
    </div>
}

export default Sidebar;