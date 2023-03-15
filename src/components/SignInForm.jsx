import { useState } from "react";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { SubmitFormField } from "../components/SubmitFormField";
import { getRandomName } from "../library/random";
import { AvatarFormField } from "../components/AvatarFormField";


export function SignInForm(props){
    const [ formState, setFormState ] = useState(getRandomName());  //pozvali smo funkciju useState kako bi se random name pokazalo na page loadu 
    const [avatar, setAvatar ] = useState();

    function handleSubmit(event){   //prati sto je user submitao na kraju 
        event.preventDefault();   
        props.onSubmit({
            username: formState,     //prikuplja ukucani username i odabrani avatar
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value){
        setFormState(value);  //prati promjenu u username inputu
    }

    function handleAvatarChange (value){
        setAvatar(value);
    }

    return(
        <form className="sign-in-form" onSubmit={handleSubmit}>
                    <AvatarFormField onChange={handleAvatarChange}/>
                    <InputFormField label="Username:" 
                                    type="text" 
                                    onChange={handleUsernameChange}
                                    value={formState}/>
                    <SubmitFormField label="Sign in"
                        type="submit"/>
                    <FormField>
                        <RandomNameButton onRandomName ={handleUsernameChange}/>
                     </FormField>
        </form>
    );
}