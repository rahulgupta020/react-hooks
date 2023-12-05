import React, { useContext } from "react";
import { AppContext } from "./index";

const Login = () => {

    const {setUsername} = useContext(AppContext);

    return(
        <>
            <input type="text" onChange={(event)=>{setUsername(event.target.value)}} />
        </>
    )
}
export default Login;