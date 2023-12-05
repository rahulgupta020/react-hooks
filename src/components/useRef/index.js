import React from "react";
import { useRef } from "react";

// we use useRef hook when we have to click on input box or get input box value
// useRef object is used to create a mutable object that persist across renders.
// It is often used to instract with or refernce DOM elements directly.
// The primaru ise case for udeRef include accessing and intracting with DOM elements,
// managing focus, and persisting values across renders without causing re-render.

const UseRefHook = () =>{

    const inputRef = useRef(null);

    const handleSubmit = () => {
        console.log("handleSubmit function")
        console.log(inputRef.current.value)
        inputRef.current.focus()
    }

    return(
        <>
            <h1>useRef</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default UseRefHook;