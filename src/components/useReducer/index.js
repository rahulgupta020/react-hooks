import React, { useReducer, useState } from "react";

// useReducer hook for managing state in functional component.
// It use particularly usefull when the state logic is complex.
// React Hook is used for more complex state logic.
// It is preferable to useState when the next state depends on privios state.
// import React, { useReducer } from 'react';
// the reducer is a function that specifies how the state should change in response to an action.
// It takes current state and an action, and return the new state.


const reducer = (state, action) => {
    switch(action.type){
        case "INCREAMENT":
            return {count: state.count+1, text:state.text}
        case "toggleShowText":
            return {count: state.count, text:false}
        default:
            return state;
    }
}

const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, {count:0, text:true})

    const handleSubmit = () => {
        console.log("handleSubmit")
        dispatch({type:"INCREAMENT"});
        dispatch({type:"toggleShowText"});
    }

    return(
        <>
            <h1>Use Reducer Hook</h1>
            <h4>Count = {state.count}</h4>
            <button onClick={handleSubmit}>Submit</button>
            {state.text && <p>Click on Button</p>}
        </>
    )
}
export default UseReducerHook;



// const UseReducerHook = () => {

//     const [count, setCount] = useState(0);
//     const [text, setText] = useState(true)

//     const handleSubmit = () => {
//         console.log("handleSubmit")
//         setCount(count+1)
//         setText(false)
//     }

//     return(
//         <>
//             <h1>Use Reducer Hook</h1>
//             <h4>Count = {count}</h4>
//             <button onClick={handleSubmit}>Submit</button>
//             {text && <p>Click on Button</p>}
//         </>
//     )
// }
// export default UseReducerHook;