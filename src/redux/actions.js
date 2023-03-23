export const SAVE_USER = "SAVE USER";
export const CLEAR_USER = "CLEAR_USER";
export const SAVE_USERS = "SAVE USERS";

export const LIKE_WORK = "LIKE_WORK";
export const UNLIKE_WORK = "UNLIKE_WORK";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const FETCH_WORK = "FETCH_WORK";
export const SAVE_CALENDAR = "SAVE_CALENDAR";
export const CLEAR_CALENDAR = "CLEAR_CALENDAR";
// export const SAVE_WORK = "SAVE_WORK";
const apiUrl = process.env.BE_URL;

export const clearUserAction = () => ({
  type: "CLEAR_USER",
});

export const clearCalendarAction = () => ({
  type: "CLEAR_CALENDAR",
});

export const saveCalendarAction = (calendar) => ({
  type: SAVE_CALENDAR,
  payload: calendar,
});
// export const saveWorkAction = (workout) => {
//   return {
//     type: SAVE_WORK,
//     payload: workout,
//   };
// };
export const unlikeWorkAction = (likes) => ({
  type: UNLIKE_WORK,
  payload: likes,
});
export const likeWorkAction = (likes) => {
  return {
    type: LIKE_WORK,
    payload: likes,
  };
};

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const getUserAction = () => {
  return async (dispatch, getState) => {
    const token = getState().user.accessToken;

    const optionsGet = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
