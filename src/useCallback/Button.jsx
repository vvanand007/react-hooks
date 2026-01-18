import React from "react";

const Button = ({ onClick }) => {
    console.log('Button rendered');
    return (
        <button onClick={onClick}>Click here</button>
    )
}

export default React.memo(Button);