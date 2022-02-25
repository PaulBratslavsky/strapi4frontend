import { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalContextState } from "./context/globalContext";
import "../src/styles.css";

import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';

function NotFound() {
  return <h1>Not Found</h1>;
}

function PrivateRoute() {
  const { loggedIn } = useContext(GlobalContextState);
  return loggedIn ? <Dashboard /> : <Navigate to="/" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<PrivateRoute />}>
        <Route element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
