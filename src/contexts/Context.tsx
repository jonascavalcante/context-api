import { createContext } from "react";

type ContextType = {
  name: string;
  age: number;
}

const initialState = {
  name: 'João',
  age: 20
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  )
}