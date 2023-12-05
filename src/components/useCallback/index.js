import React, { useCallback, useState } from "react";
import Child from "./Child";

// usecallback is much similar to usememo. but usecallback prevent re-render in child components.
// useCallback hook in react used to memorized callback function, preventing unnecessory creation of those function on every render.
// it is usefull when passing callback to child components to avoid unnecessory render.


const UseCallbackHook = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("This is useCallback Hook");

    const emailFun = useCallback((name) => {
        return data
    }, [data]) 

    return(
        <>
            <h1>UseCallbackHook</h1>
            <Child emailFun={emailFun} />
            <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
            {toggle && <h1>toggle</h1>}
        </>
    )
}
export default UseCallbackHook;