import { MessageForm } from "../components/MessageForm";
import { useState } from "react";
import { Message } from "../components/Message";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export function ChatPage(props){
    const [messages, setMessages] = useState ([]);
    const [ client, setClient ] = useState(null);
    const [ chatRoom, setChatRoom ] = useState(null);
    const [ ready , setReady ] = useState(false);
    const context = useContext(AppContext);

    function handleSubmit(message){
        client.publish({
            room: 'algebra',
            message: message
        });
    }

    function handleSignOut(){
        context.setUsername('');
    }

    const messageComponents = messages.map((message)=>{    
        return (<Message 
        key={message.id}                     
        avatarIndex={message.author.avatarIndex} 
        author={message.author.username}
        text={message.text}/>
        );
    });

    useEffect(()=>{
        const drone = new  window.Scaledrone('yV4XcQfeBo6PtEjV',);  //Scaledrone 
    
        drone.on('open',(error)=>{
            if(error){
            console.log(error);
            } else {
            const room = drone.subscribe('algebra');    

            setClient(drone);
            setChatRoom(room);
            }  
        });    
    }, []);

    useEffect(() => {
        if(chatRoom !== null && !ready){
            chatRoom.on('data', (data)=>{
                setMessages((messages)=>{
                    return [...messages, data ]
                });
            });
            setReady(true);
        }
    }, [chatRoom, ready]);
    

    if (!context.isSignedIn){
        return <Navigate to="/" replace /> //vodi korisinka na naslovnicu ako ukuca u webstranicu /chat a nije logged in 
    }

    return(
        <div>
            Chat Page
            <button type="button" onClick={handleSignOut}>Sign Out</button>
            <div className="message-list">
               {messageComponents}
            </div>
            <MessageForm onSubmit={handleSubmit} 
                        username={context.username}
                        avatarIndex={context.avatarIndex}/>
        </div>
    );
};