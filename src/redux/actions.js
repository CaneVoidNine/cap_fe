export const SAVE_USER = "SAVE USER";
export const SAVE_USERS = "SAVE USERS";
export const GET_EXE = "GET_EXE";
export const SAVE_LIKES = "SAVE_LIKES_SUCCESS";
export const DELETE_LIKES = "DELETE_LIKES_SUCCESS";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const CLEAR_WORK = "CLEAR_WORK";
export const FETCH_WORK = "FETCH_WORK";
export const SAVE_CALENDAR = "SAVE_CALENDAR";
export const CLEAR_CALENDAR = "CLEAR_CALENDAR";
// export const SAVE_WORK = "SAVE_WORK";
const apiUrl = process.env.BE_URL;

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
export const getExercisesAction = () => {
  return async (dispatch, getState) => {
    const token = getState().user.accessToken;

    const optionsPut = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // add Content-Type header
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3002/users/me/myExe`, // add / between likes and workoutId
        optionsPut
      );

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "GET_EXE", payload: data });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
      // dispatch an error action or throw an error
    }
  };
};
export const saveLikesAction = (workoutId) => {
  return async (dispatch, getState) => {
    const token = getState().user.accessToken;

    const optionsPut = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // add Content-Type header
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3002/users/me/likes/${workoutId}`, // add / between likes and workoutId
        optionsPut
      );

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: SAVE_LIKES, payload: data });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
      // dispatch an error action or throw an error
    }
  };
};
export const deleteLikesAction = (workoutId) => {
  return async (dispatch, getState) => {
    const token = getState().user.accessToken;

    const optionsDelete = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3002/users/me/likes/${workoutId}`,
        optionsDelete
      );

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: DELETE_LIKES, payload: workoutId });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
      // dispatch an error action or throw an error
    }
  };
};

export const clearWorkAction = (likes) => ({
  type: CLEAR_WORK,
});
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
