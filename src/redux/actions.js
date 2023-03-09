export const SAVE_USER = "SAVE USER";
export const SAVE_USERS = "SAVE USERS";

export const SAVE_TOKEN = "SAVE_TOKEN";
export const FETCH_WORK = "FETCH_WORK";
// export const SAVE_WORK = "SAVE_WORK";
const apiUrl = process.env.BE_URL;

// export const saveWorkAction = (workout) => {
//   return {
//     type: SAVE_WORK,
//     payload: workout,
//   };
// };

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const getUserAction = (accesstoken) => {
  return async (dispatch) => {
    const optionsGet = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    try {
      const response = await fetch(
        "http://localhost:3002/users/me",
        optionsGet
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: SAVE_USER, payload: data }); // dispatch the action to update the user info in the state
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveTokenAction = (token) => {
  return {
    type: SAVE_TOKEN,
    payload: token,
  };
};

export const fetchWorkoutsAction = () => {
  return async (dispatch, getstate) => {
    try {
      const fetchWorkoutsOptions = {
        method: "GET",
      };
      const response = await fetch(
        `http://localhost:3002/workouts`,
        fetchWorkoutsOptions
      );
      if (response.ok) {
        const workouts = await response.json();
        dispatch({ type: FETCH_WORK, payload: workouts });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
