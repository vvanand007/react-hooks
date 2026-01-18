import { useActionState } from "react";
import "./style.css";
import SubmitButton from "./SubmitButton";

export default function SignUpForm() {
    const doSignUp = async (prevState, formData) => {
        // console.log(formData.get("userName"), formData.get("email"), formData.get("password"))
        const userNme = formData.get("userName");
        const email = formData.get("email");
        const password = formData.get("password");
        // console.log({ prevState, formData });
        await new Promise(res => setTimeout(res, 1000)); // simulate delay

        if (userNme && email && password)
            return { error: null, success: "signed up" };

        return { error: "couldn't sign up", success: null };

    }
    const [state, signUp, isPending] = useActionState(doSignUp, { error: null, success: true })

    return (
        <form className="form-box" action={signUp}>
            <div className="form-row">
                <label htmlFor="userName">User Name: </label>
                <input type="text" name="userName" id="userName" />
            </div>
            <div className="form-row">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-row">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
                <SubmitButton />
            </div>
            <div>
                {state.error && <p>{state.error}</p>}
                {state.success && <p>{state.success}</p>}
            </div>
        </form>
    )
}