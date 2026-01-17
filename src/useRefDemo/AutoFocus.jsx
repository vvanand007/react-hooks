import { useEffect, useRef } from "react"

export default function AutoFoucs() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div style={{
            width: "400px",
            height: "200px",
            border: "1px black solid",
            margin: "5px",
            padding: "5px"
        }}>
            <label htmlFor="name" ref={inputRef}>Name: </label>
            <input name="name" id="name" type="text" /> <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
        </div>
    )
}