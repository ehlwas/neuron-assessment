import React from "react";
import { useMyContext } from "../context/MyContext"
import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: React.ReactNode;
}

const PublicRoute = ({
  children
}: PublicRouteProps) => {

  const { state } = useMyContext();

  const { login } = state;
  const { id } = login ?? {};

  if (id) {
    return <Navigate to="/dashboard" />
  }
  
  return (
    <>
     { children }
    </>
  )
}

export default PublicRoute