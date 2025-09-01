import React, { createContext, useContext, useReducer, type ReactNode } from "react";
import type { User } from "../lib/types";

interface State {
  login: User | null;
}

type Action = { type: "getLogin"; payload: User | null }
  | { type: "logout"; };

const initialState: State = { login: null };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "getLogin":
      return { ...state, login: action.payload ?? null };
    case "logout":
      return { ...state, login: null };
    default:
      return state;
  }
};

interface MyContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used inside MyProvider");
  }
  return context;
};
