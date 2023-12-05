import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

// contextApi does not need props being passed to each single component which is one of the benefits.
// context is just a collection of state, which you can have access to all those state inside of the components and structure that you put inside of the wrapper provider.
// this is useful for globally state or values across different parts of your app without the need for prop drilling.
// react context is a fauture that allow you to share values between componenets without explicitly passing the data throgh each componenet manually.
// useContext hook is used to consume the value from react context.
//useful for managing global state in your application without relying on external management library.


export const AppContext = createContext(null);

const UseContextHook = () => {

    const [username, setUsername] = useState("");

    return (
        <>
            <h1>UseContextHook</h1>
            <AppContext.Provider value={{username, setUsername}}>
                <Login /><User />
            </AppContext.Provider>
        </>
    )
}
export default UseContextHook;