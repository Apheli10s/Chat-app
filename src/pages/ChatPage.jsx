import { MessageForm } from "../components/MessageForm";
import { useState } from "react";
import { Message } from "../components/Message";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";

export function ChatPage(props){
    const [messages, setMessages] = useState ([]);
    const context = useContext(AppContext);

    function handleSubmit(message){
        setMessages([ ...messages, message]);
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