import { useCallback, useState } from "react";
import Button from "./Button";

export default function WithUseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, [])

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button onClick={handleClick} />
        </>
    )
}