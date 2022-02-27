export const useFetchTeamUsers = (state, dispatch) => {
  return (teamID) => {
    if (state.loggedIn) {
      fetch(`/api/teams/${teamID}/users`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((users) => {
          dispatch({ type: "GET_TEAM_USERS", payload: { teamID, users } });
        });
    }
  };
}
