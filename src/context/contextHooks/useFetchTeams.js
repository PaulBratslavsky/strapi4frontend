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



/* 

userLogin = (dispatch, e) => {
    e.preventDefault();

    let payload = {email: this.state.email,
                  password: this.state.password };
    const url = "/api/users/login.php";
    console.log(payload);
    fetch(url,{
        method: "POST",
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(
        (result) => {
            user.id = result.id;
            user.name = result.name;
            // ...
            // And call dispatch from here
            dispatch (type: 'USER_LOGIN',
                user: user // We don't need payload here as we already got user info
            );
        },
        (error) => {
            console.log(error);
        }); 
}

*/