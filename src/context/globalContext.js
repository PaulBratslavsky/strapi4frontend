import { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useFetchTeams } from "./contextHooks/useFetchTeams";
import { useFetchTeamUsers } from "./contextHooks/useFetchTeamUsers";

export const GlobalContextState = createContext();
export const GlobalContextDispatch = createContext();
export const GlobalContextMethods = createContext();

const initialState = {
  loggedIn: false,
  user: null,
  token: null,
  teams: [],
  teamUsers: {},
};

const reducer = (draft, action) => {
  switch (action.type) {
    case "LOGIN":

      draft.loggedIn = true
      draft.user = action.payload.user;
      draft.token = action.payload.jwt;
      
      return;

    case "LOGOUT":
      draft.loggedIn = false;
      return;

    case "GET_TEAMS": {
      draft.teams = action.payload;
      return;
    }

    case "GET_TEAM_USERS": {
      draft.teamUsers = {
        ...draft.teamUsers,
        [action.payload.teamID]: action.payload.users,
      };
      return;
    }

    default:
      return draft;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("teams-app-data", initialState);
  const [state, dispatch] = useImmerReducer(reducer, data);

  useEffect(() => {
    if (data.loggedIn === false) localStorage.removeItem("teams-app-data");
    setData(state);
  }, [state, setData, data]);

  const fetchTeams = useFetchTeams(state, dispatch);
  const fetchTeamUsers = useFetchTeamUsers(state, dispatch);

  return (
    <GlobalContextState.Provider value={state}>
      <GlobalContextDispatch.Provider value={dispatch}>
        <GlobalContextMethods.Provider value={{ fetchTeams, fetchTeamUsers }}>
          {children}
        </GlobalContextMethods.Provider>
      </GlobalContextDispatch.Provider>
    </GlobalContextState.Provider>
  );
};

export default GlobalContextProvider;
