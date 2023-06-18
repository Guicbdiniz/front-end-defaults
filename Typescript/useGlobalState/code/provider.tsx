import React, { createContext } from "react";

type GlobalState = {};

const DEFAULT_GLOBAL_STATE: GlobalState = {};

const GlobalStateContext = createContext<GlobalState>(DEFAULT_GLOBAL_STATE);

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateContext.Provider value={{}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
