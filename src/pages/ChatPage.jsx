import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";


/* const messages = [  //rjeseno kroz state kasnije 
    {
        id: "4321",
        author: {
            username: "Mario",
            avatar: 0,
        },
        text: "Chicken!",

    },
    {
        id: "1234",
        author: {
            username: "Mini",
            avatar: 1,
        },
        text: "Meooow chimken.",

    },
]; */

export function ChatPage(props){

    const [formState, setFormState] = useState('');
    const [messages, setMessages] = useState ([]);

    function handleChange(message){
       setFormState(message);
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormState(''); //prazni input nakon sumbitanja poruke 

        setMessages([ ...messages, {
        id: Date.now(),
        author: {
            username: props.username,
            avatarIndex: props.avatarIndex,
        },
        text: formState,
        }]);

    }

    
    /* const messageComponents = [];

    for(let i=0; i<messages.length; i++){
        const message = messages[i];

        messageComponents.push(<Message 
            key={message.id}         //rjesava warning iz console : Warning: Each child in a list should have a unique "key" prop
            avatarIndex={message.author.avatar} 
            author={message.author.username}
            text={message.text}/>
            );
    } */

    const messageComponents = messages.map((message)=>{    //map function, kraći način za block comment l27-38
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
            <form onSubmit ={handleSubmit}>
                <InputFormField label="Message"
                    type="text"
                    value={formState}
                    onChange={handleChange}     
                />
                <SubmitFormField label="Send"
                    type="submit"
                />
            </form>
        </div>
    );
};