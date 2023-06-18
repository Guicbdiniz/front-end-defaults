import { useContext } from "react";
import { GlobalStateContext, GlobalStateProvider } from "./provider";

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { useGlobalState, GlobalStateProvider };
