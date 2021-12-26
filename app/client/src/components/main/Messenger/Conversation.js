import {useContext, useEffect, useState} from 'react'
import { getUserInfo } from "../../../api/services"
import { AuthContext } from '../../../context/Authentication';

const Conversation = ({conversation}) => {

    const [chatPartner, setChatPartner] = useState(null);
    const {authData} = useContext(AuthContext);

    useEffect(() => {

        
        refreshUserInfo();

    }, []);

    const findChatPartnerID = () => {

        const members = conversation ? conversation.members : [];
        const chatPartners = members.filter(partnerID => {
            
            
            return partnerID !== authData.user._id
        });
       
        return chatPartners.length > 0 ? chatPartners[0] : -1;
    }

    const refreshUserInfo = async () => {

        try {
            
            const user = await getUserInfo(findChatPartnerID());
            
            setChatPartner(user);
        } catch (error) {
            
        }

    }

   

    return (chatPartner ?
    <>
        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" className='me-2'/>
        <div class="about">
            <div class="name">{chatPartner.username}</div>
            <div class="status"> <i class="fa fa-circle online"></i> online </div>
        </div>
    </>
    : null
    )
}


export default Conversation;