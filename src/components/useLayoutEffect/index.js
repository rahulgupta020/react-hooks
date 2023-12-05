import React, { useEffect, useLayoutEffect, useRef } from "react";

// useLayoutEffect is called in a earlier stage of your page rendering than the useEffect.
// useLayoutEffect called before useEffect.
// useLayoutEffect hook in reactjs is similar to useEffect Hook, but it fires synchronously after all DOM mutttions.
// This can be useful when you need to perform measurements or manipulation on the dom that should be reflected before the browser repaints.

const UseLayoutEffectHook = () =>{

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    })
    useEffect(() => {
        inputRef.current.value = "Gupta"
    },[])

    return(
        <>
            <h1>UseLayoutEffectHook</h1>
            <input type="text" value="Rahul" ref={inputRef} />
        </>
    )
}
export default UseLayoutEffectHook;