import { useContext } from 'react';
import "../src/styles.css";

import { GlobalContextState } from "../src/context/globalContext";
import { GlobalContextDispatch } from '../src/context/globalContext';

import Button from "./styled/Button/Button";

function App() {
  const state = useContext(GlobalContextState);
  const dispatch = useContext(GlobalContextDispatch);

  if (!state.loggedIn) return <Button onClick={() => dispatch({ type: "LOGIN" })}>Login</Button>;
  if (state.loggedIn) return <Button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Button>;

}

export default App;


