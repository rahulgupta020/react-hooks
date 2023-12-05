import React, {useEffect, useState} from "react";
import axios from "axios";

// useEffect hook including data fetching, manual DOM manipulation, or any other operation that need to be perfomed after the component has render.
// it takes two arguments :-
// 1) A function that contain the code to run for side effect(fetching and all).
// 2) An optional array of dependencies. If provided, the effect will only run if the dependencies have changed.
// It is similar to componentDidMount() in class components.
// empty dependency array means the effect run only once after the initial render.
// return () => {
// }, []); Code to run when the components unmounts or when the dependencies changes

const UseEffectHook = () => {

    const [apiData, setApiData] = useState("")

    useEffect(() => {
        console.log("useEffect Called!!!")
        axios.get("https://jsonplaceholder.org/comments")
        .then((res) => {
            console.log(res.data);
            setApiData(res.data[0].comment)
        })
    },[])

    return(
        <>
            <h1>Use Effect Hook</h1>
            <h4>Data = {apiData}</h4>
        </>
    )
}
export default UseEffectHook;