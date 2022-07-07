import { useState } from "react";

type UserType = {
    name: string,
    email: string
};

export const User = () => {
    const [user, setUser] = useState<UserType|null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const loginHandler = () => {
        setIsLoggedIn(true);
        setUser({
            name: "Amit",
            email: "amit@gmail.com"
        });
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        setUser(null)
    }

    return(
        <>
            
            {isLoggedIn?<button onClick={logoutHandler}>Logout</button>:<button onClick={loginHandler}>Login</button>}
            <h1>Status {isLoggedIn? user?.name:"logged out"}</h1>
        </>
    )
}