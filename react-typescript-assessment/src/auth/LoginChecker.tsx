import React, { useEffect } from "react"
import { useMyContext } from "../context/MyContext";


type LoginCheckerProps = {
  children: React.ReactNode;
}


const LoginChecker = ({
  children
}: LoginCheckerProps) => {


  const { dispatch } = useMyContext();


  useEffect(() => {

    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({ type: "getLogin", payload: foundUser });
    }

  }, [])


  return (
    <>
      {children}
    </>
  )
}

export default LoginChecker