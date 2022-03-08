import { ReducerActionType } from "../types/reducerActionType";

export type UserType = {
  name: string;
  age: number;
}

export const userInitialState: UserType = {
  name: 'João',
  age: 20,
}

export const UserReducer = (state: UserType, action: ReducerActionType) => {
  
  switch (action.type) {
    case "CHANGE_NAME":
        return {...state, name: action.payload.name}

    case "CHANGE_AGE":
        return {...state, age: action.payload.age}
  
    default:
      break;
  }

  return state;
}