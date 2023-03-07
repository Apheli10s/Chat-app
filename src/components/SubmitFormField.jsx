import "../styles/SubmitFormField.css"
import { Button } from "./Button"

export function SubmitFormField (props) {
    return (
        <div className="submit-form-field">
                        <Button label={props.label} />
                    </div>
    );
};