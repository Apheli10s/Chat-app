import { MessageForm } from "../components/MessageForm";
import { useState } from "react";
import { Message } from "../components/Message";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function ChatPage(props){
    const [messages, setMessages] = useState ([]);
    const context = useContext(AppContext);

    function handleSubmit(message){
        setMessages([ ...messages, message]);
    }

    const messageComponents = messages.map((message)=>{    
        return (<Message 
        key={message.id}                     
        avatarIndex={message.author.avatarIndex} 
        author={message.author.username}
        text={message.text}/>
        );
    });

    return(
        <div>
            Chat Page
            <div className="message-list">
               {messageComponents}
            </div>
            <MessageForm onSubmit={handleSubmit} 
                        username={context.username}
                        avatarIndex={context.avatarIndex}/>
        </div>
    );
};