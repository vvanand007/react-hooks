import { useState } from "react"
import Button from "./Button";

export default function WithoutUseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Button clicked');
    }

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button onClick={handleClick} />
        </>
    )
}