import React from "react";
import { useMyContext } from "../context/MyContext"
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
}

const PrivateRoute = ({
  children
}: PrivateRouteProps) => {

  const { state } = useMyContext();

  const { login } = state;
  const { id } = login ?? {};

  if (!id) {
    return <Navigate to="/" />
  }
  
  return (
    <>
     { children }
    </>
  )
}

export default PrivateRoute