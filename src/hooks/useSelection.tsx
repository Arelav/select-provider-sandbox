import { Dispatch, useContext, useEffect } from "react";
import { AnyAction } from "redux";
import { Context, register } from "../providers/SelectProvider";

type UseSelection = (id: string) => [any, Dispatch<AnyAction> | undefined];

const useSelection: UseSelection = (id: string) => {
  const { state, dispatch } = useContext(Context);

  console.log("useSelection hook", state);
  useEffect(() => {
    console.log("subscribe", state);
    // dispatch(register(id));

    return () => console.log("unsubscribe");
  }, [dispatch, id, state]);

  return [state, dispatch];
};

export default useSelection;

/*
{selectionId1: [], selectionId2: [], register, unregister}
*/
