import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage(props){

    /* const stateArray = useState(''); //prazan string u pocetku, u userinputu
    const formState = stateArray[0];
    const setFormState = stateArray[1]; 
    isto kao : */
    const [ formState, setFormState ] = useState('');

    function handleSubmit(event){   //prati sto je user submitao na kraju 
        event.preventDefault();   
        props.onSubmit(formState);
    }

    function handleUsernameChange(value){
        setFormState(value);  //prati promjenu u username inputu
    }

    
    return (
        <div className ="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" 
                                    type="text" 
                                    onChange={handleUsernameChange}/>
                    <SubmitFormField />
                </form>
            </div>
        </div>
    );
};