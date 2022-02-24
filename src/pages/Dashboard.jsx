import { useContext } from "react";
import { GlobalContextDispatch } from '../context/globalContext';
import Button from '../styled/base/Button/Button';

export default function Dashboard() {
  const dispatch = useContext(GlobalContextDispatch);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Private component</p>
      <Button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Button>
    </div>
  );
}