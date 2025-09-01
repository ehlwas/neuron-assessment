// This Component is the maker of the 
// ADMIN Account for the first time user landed
import React, { useEffect } from "react";

type InitialSetupProps = {
  children: React.ReactNode;
}

const InitialSetup = ({
  children
}: InitialSetupProps) => {


  useEffect(() => {

    const checkUserList = localStorage.getItem('userList');

    if (checkUserList === null) {
      const adminUser = [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@gmail.com',
          password: 'Admin@123',
          role: 'admin'
        }
      ];

      localStorage.setItem('userList', JSON.stringify(adminUser));
    }
    
  }, [])
  
  
  return (
    <>
      {children}
    </>
  )
}

export default InitialSetup