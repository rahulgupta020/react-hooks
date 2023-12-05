import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

// Every time i click in toggle button. then it automatically call longestEmail function.
// so we pass function in useMemo and when 3nd parameter [data] changes in useMemo line. then it will refresh.
// The useMemo hook in react used to memorize the result of a computation, preventing unnecessary calculation.
// It is particularly usefull when dealing with expensive calculations or function that dont need to be re-executed on every render.


const UseMemoHook = () => {

    const [email, setEmail] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                // const email_list=[];
                // for (let i=0;i<10;i++){
                //     email_list.push(res.data[i].email)
                // }
                const email_list = res.data.slice(0, 10).map((ele) => ele.email)
                setEmail(email_list)
            })
    }, [])

    const longestEmail = (email_data) => {
        console.log("longestEmail function")
        let longEmail="";
        for (let i=0;i<email_data.length;i++){
            let currentVal = email_data[i];
            if(currentVal.length > longEmail.length){
                longEmail=currentVal;
            }
        }
        return longEmail;
    }

    const largestEmailMemo = useMemo(() => longestEmail(email), [email])
    // const largestEmailMemo = useMemo(() => longestEmail(email), [toggle])

    return (
        <>
            <h1>UseMemoHook</h1>
            <h1>Longest character email = {largestEmailMemo}</h1>
            <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </>
    )
}
export default UseMemoHook;