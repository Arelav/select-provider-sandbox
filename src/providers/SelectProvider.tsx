import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
  useState
} from "react";
import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

type State = Record<string, []>;

const initialState = {};

// export const increment = createAction("increment");
// export const decrement = createAction("decrement");
// export const set = createAction<number, "set">("set");
// export const reset = createAction("reset");
export const register = createAction<string, "register">("register");

const reducer = createReducer(
  initialState,
  (builder) =>
    builder.addCase(register, (state, { payload }: PayloadAction<string>) => ({
      ...state,
      [payload]: []
    }))
  // .addCase(increment, ({ id: { count } }) => ({
  //   id: { count: count + 1 }
  // }))
  // .addCase(decrement, ({ id: { count } }) => ({ id: { count: count - 1 } }))
  // .addCase(reset, () => ({ id: { count: 0 } }))
  // .addCase(set, (state, { payload }: PayloadAction<number>) => ({
  //   id: {
  //     count: payload
  //   }
  // }))
);

export const Context = createContext<{
  state: State;
  dispatch: Dispatch<AnyAction>;
}>({
  state: initialState,
  dispatch: () => undefined
});

const SelectProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default SelectProvider;
