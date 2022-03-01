import { useEffect } from 'react';

export const useFetchTeams = (state, dispatch) => {
  useEffect(() => {
    if (state.loggedIn) {
      fetch("/api/teams", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((teams) => {
          dispatch({ type: "GET_TEAMS", payload: teams });
        });
    }
  }, [state.loggedIn, state.token, dispatch]);
}

