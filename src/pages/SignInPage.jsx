import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameFormField } from "../components/RandomNameFormField";
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

    console.log(formState);


    return (
        <div className ="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" 
                                    type="text" 
                                    onChange={handleUsernameChange}
                                    value={formState}/>
                    <RandomNameFormField onRandomName ={handleUsernameChange}/>
                    <SubmitFormField label="Sign in"/>
                </form>
            </div>
        </div>
    );
};