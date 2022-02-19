import { useContext } from 'react';

import { GlobalContextDispatch, GlobalContextState } from '../context/globalContext';

import Button from "../styled/Button/Button";

export default function ContextTest() {
  const state = useContext(GlobalContextState);
  const dispatch = useContext(GlobalContextDispatch);

  if (!state.loggedIn) return <Button onClick={() => dispatch({ type: "LOGIN" })}>Login</Button>;
  if (state.loggedIn) return <Button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Button>;
}


