import { useEffect, useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar.js"


export function AvatarFormField(props){         //if statemente smo ukljucili; ako dodjemo do zadnje slike da nas vrati na pocetak
    const [index, setIndex] = useState(0);        //ako idemo u nazad i predjemo prvu sliku, da odemo na kraj
    
    useEffect(()=>{
        props.onChange(index);
    }, [index, props]) 

    function handlePreviousAvatar(){
        if(index <= 0){    
            setIndex(avatarImages.length - 1);
        } else {
        setIndex(index - 1);
        }
    };

    function handleNextAvatar(){
        if(index >= avatarImages.length - 1){    
            setIndex(0)
        } else {
        setIndex(index + 1);
        }
    }

    return(
        <FormField>
            <button type="button" onClick={handlePreviousAvatar}>Previous</button>
            <img height="50" width="100" src={avatarImages[index]}  alt={index}/>
            <button type="button" onClick={handleNextAvatar}>Next</button>
        </FormField>
    );
}