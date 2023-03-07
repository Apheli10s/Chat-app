import { getRandomName } from "../library/random";
import { Button } from "./Button";

export function RandomNameButton (props){
    
    function handleClick(){
        props.onRandomName(getRandomName);  //onRandomName definirano na SignInPageu
    }

    return(
        <Button type="button" onClick={handleClick} label="Get random name" /> 
    );
}