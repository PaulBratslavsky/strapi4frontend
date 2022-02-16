import { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { useLocalStorage } from '../hooks/useLocalStorage';

export const GlobalContextState = createContext();
export const GlobalContextDispatch = createContext();

const initialState = {
  loggedIn: false,
};

const reducer = (draft, action) => {
  switch (action.type) {
    case "LOGIN":
      draft.loggedIn = true;
      return;

    case "LOGOUT":
      draft.loggedIn = false;
      return;
    
    default:
      return draft;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [ data, setData ] = useLocalStorage('app-data', initialState);
  const [state, dispatch] = useImmerReducer(reducer, data);

  useEffect(() => {
    setData(state);
  }, [state, setData]);

  return (
    <GlobalContextState.Provider value={state}>
      <GlobalContextDispatch.Provider value={dispatch}>
        {children}
      </GlobalContextDispatch.Provider>
    </GlobalContextState.Provider>
  );
};

export default GlobalContextProvider;
