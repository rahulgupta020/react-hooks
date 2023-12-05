import React, { useState } from "react";

// React Hook is used to add state to functional Component.
// useState is commonly used for managing local component state, such as input value, toggle, counter.
// It was introduced in React 16.8 to allow functional to manage local state
// import React, { useState } from 'react';
// The useState function return an array with two Element: the current state value and a function that lets you update it.
// const[state, useState]=useState(initialState) state:current state value  setState:a function to update the state.
// initialState can be a premitive value (String, number, boolean) 
// You can use useState multiple time in a component to manage multiple state variable.


const UseStateHook = () => {

    const [counter, setCounter] = useState(0);

    const handleIncreament = () => {
        console.log("handleIncreament")
        setCounter(counter + 1)
    }
    const handleDecreament = () => {
        console.log("handleDecreament")
        if (counter <= 0) {
            setCounter(0)
            alert("Value is Zero. It not goes in minus")
        }
        else {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <h1>Use State Hook</h1>
            <h4>Value = {counter}</h4>
            <button onClick={handleIncreament}>Increament</button>{' '}
            <button onClick={handleDecreament}>Decreament</button>
        </>
    )
}
export default UseStateHook;