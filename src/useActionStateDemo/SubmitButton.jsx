import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();
    return(
        <button disabled={pending}>Sign Up</button>
    )
}