import { useEffect, useRef, useState } from "react"

export default function PrevState() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count;
    }, [count])

    return (
        <>
            <div>
                <button onClick={() => setCount(count - 1)}>Prev</button>
                Current {count}
                <button onClick={() => setCount(count + 1)}>Next</button>
            </div>
            <div>Previous {prevCount.current}</div>
        </>
    )
}
