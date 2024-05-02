import React, { createContext, useReducer } from "react";
import { reducer } from "../Reducer/UserReducer";

const UserContext = createContext();

const initialState = null;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
