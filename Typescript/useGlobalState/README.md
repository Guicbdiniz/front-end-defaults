# useGlobalState

`useGlobalState` is a custom React hook used to provide access to a global state to all components of the application. It uses [React's Context API](https://react.dev/reference/react/useContext).

To use it, you must create a `GlobalState` type (which must hold not only the data types from the state, but also the functions/methods to access and modify it) and a `GlobalStateContext` to hold all the data. After wrapping the App's main component with the context's provider, the context can than be accessed with the `useContext` hook (which will be called from the custom `useGlobalHook`).
