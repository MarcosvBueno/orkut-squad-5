 import React, { useState, createContext, ReactNode } from 'react';

// Defining types for the context
interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Initializing the context with an initial value of null
export const UserContext = createContext<UserContextType | null>(null);

// Defining the type for UserProvider props
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  // State to hold the user login status
  const [userIsLogged, setUserIsLogged] = useState(false);
  
  return (
    // Providing the state and setter to the context value
    <UserContext.Provider value={{ userIsLogged, setUserIsLogged }}>
      {props.children}
    </UserContext.Provider>
  );
};
