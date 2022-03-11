import { createContext, useReducer } from "react";

import { userInitialState, userReducer, UserType } from "../reducers/userReducer";
import { ReducerActionType } from "../types/reducerActionType";

import { themeInitialState, themeReducer, ThemeType } from "../reducers/themeReducer";

type initialStateType  = {
  user: UserType;
  theme: ThemeType;
}

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType , action: ReducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
})

export const ContextProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}