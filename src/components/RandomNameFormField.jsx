import { RandomNameButton } from "./RandomNameButton";
import "../styles/RandomNameFormField.css";

export function RandomNameFormField(props){
    return (
        <div className="random-name-form-field">
                        <RandomNameButton label={props.label}
                        onRandomName={props.onRandomName}/>
                    </div>
    );
}