import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage(){
    return(
        <div>
            Chat Page
            <div className="message-list">
                <Message author="Mario" text="Lorem Ipsum"/>
                <Message author="Marko" text="Dolor sit amet"/>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send"/>
            </form>
        </div>
    );
};