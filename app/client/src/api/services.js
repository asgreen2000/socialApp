import axios from 'axios';
import pathName from '../pathname';
const url = 'http://localhost:3333';

axios.defaults.withCredentials = true;

const login = data => {


    return new Promise(async (resolve, reject) => {

        
        
        axios.post(url + pathName.LOGIN, JSON.stringify(data),
            {   headers: {
                "Content-Type": "application/json"},
                
            },
            
        )
        .then(res => {
           
            resolve(res.data);
        })
        .catch(err => {

            console.log(err);
            reject(err);
        })

    })
}

const register = data => {


    return new Promise(async (resolve, reject) => {

        
        
        axios.post(url + pathName.REGISTER, JSON.stringify(data),
            {   headers: {
                "Content-Type": "application/json"},
                
            }
        )
        .then(res => {
            
            console.log(res.data);
            resolve(res.data);
        })
        .catch(err => {

            console.log(err);
            reject(err);
        })

    })
}



const getAuthData = () => {

    return new Promise((resolve, reject) => {

        axios.get(url + pathName.AUTH).then(result => {
            console.log(result);
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
        ;

    })
}

const logout = () => {

    return new Promise((resolve, reject) => {

        axios.get(url + pathName.LOGOUT).then(result => {
            console.log(result);
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
        ;

    })
}

const createConversation = (senderId, receiverId) => {

    return new Promise((resolve, reject) => {

        const data = {senderId, receiverId};
        axios.post(url + pathName.CONVERSATION, JSON.stringify(data),
            {   headers: {
                "Content-Type": "application/json"},
                
            }
        )
        .then(res => {
            
            console.log(res.data);
            resolve(res.data);
        })
        .catch(err => {

            console.log(err);
            reject(err);
        })

    })
}

const getAllConversations = (userID) => {

    return new Promise((resolve, reject) => {

        axios.get(url + pathName.CONVERSATION + '/' + userID).then(result => {
            console.log(result);
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
        ;

    })

}

const getConversation = conversationID => {

    return new Promise((resolve, reject) => {

        axios.get(url + pathName.MESSAGE + '/' + conversationID).then(result => {
            console.log(result);
            resolve(result.data);
        }).catch(error => {
            reject(error);
        })
        ;

    })
}

const addMessage = (conversationId, sender, text) => {

    

    return new Promise((resolve, reject) => {

        const data = {conversationId, sender, text};

        axios.post(url + pathName.MESSAGE, JSON.stringify(data),
            {   headers: {
                "Content-Type": "application/json"},
            }
        )
        .then(res => {
            
            console.log(res.data);
            resolve(res.data);
        })
        .catch(err => {

            console.log(err);
            reject(err);
        })

    })
}

export {login, getAuthData, register, logout, 
createConversation, getAllConversations
,getConversation, addMessage
};