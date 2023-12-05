import React, { useContext } from "react";
import { AppContext } from "./index";

const User = () => {

    const {username} = useContext(AppContext);

    return(
        <>
            <h2>{username}</h2>
        </>
    )
}
export default User;