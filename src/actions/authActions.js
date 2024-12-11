import axios from "axios";
// import {
//   SIGNUP_SUCCESS,
//   SIGNUP_FAIL,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
// } from "./types";

// Action Types
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

// Base URL for the API
const BASE_URL = "https://ceeman-back.onrender.com/api";

// Signup Action
export const signup =
  (fullName, email, password, confirmPassword) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ fullName, email, password, confirmPassword });

    try {
      const res = await axios.post(`${BASE_URL}/signup`, body, config);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      // Automatically log the user in after signup
      dispatch(login(email, password));
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.message,
      });
    }
  };

// Login Action
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BASE_URL}/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // Store token in local storage
    localStorage.setItem("token", res.data.token);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT });
};
