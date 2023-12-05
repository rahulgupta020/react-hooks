import React, { useEffect } from "react";

const Child = ({emailFun}) => {

    useEffect(()=>{
        console.log("useEffect Called!!!");
    }, [emailFun])

    return(
        <>
            <h1>emailFun</h1>
        </>
    )
}
export default Child;