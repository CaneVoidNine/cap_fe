export const SAVE_USER = "SAVE USER";
export const SAVE_USERS = "SAVE USERS";

export const SAVE_TOKEN = "SAVE_TOKEN";
export const FETCH_WORK = "FETCH_WORK";

const apiUrl = process.env.BE_URL;

export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const getUserAction = (accessToken) => {
  return async (dispatch, getstate) => {
    try {
      const fetchMenuOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(`${apiUrl}/users/`, fetchMenuOptions);
      if (response.ok) {
        const fetchedData = await response.json();
        dispatch({ type: SAVE_USERS, payload: fetchedData });
        saveTokenAction(fetchedData.accessToken);
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

export const fetchWorkoutsAction = (accessToken) => {
  return async (dispatch, getstate) => {
    try {
      const fetchWorkoutsOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(`${apiUrl}/dishes`, fetchWorkoutsOptions);
      if (response.ok) {
        const fetchedData = await response.json();
        dispatch({ type: FETCH_WORK, payload: fetchedData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
