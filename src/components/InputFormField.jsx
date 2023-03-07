import "../styles/InputFormField.css"
import { FormField } from "./FormField"

export function InputFormField (props){

    function handleChange(event){
        props.onChange(event.target.value) //skuplja value ukucan u username
    }

    return (
        <FormField> 
            <label>{props.label}</label>
            <input className="input-box" type={props.type} onChange={handleChange} value={props.value}/>
        </FormField>
    );
};