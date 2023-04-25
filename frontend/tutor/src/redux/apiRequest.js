import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart()); //set isFetching to true
  try {
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data)); //set isFetching to false and set currentUser to res.data
    if (res.data.isTeacher) navigate("/Teacher");
    else navigate("/Student");
  } catch (err) {
    dispatch(loginFailure()); //set isFetching to false and set error to true
  }
};
