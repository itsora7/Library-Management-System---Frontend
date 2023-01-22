import { toast } from "react-toastify";
import { loginUser, registerNewUser } from "../../helpers/axios";
import {
  loginSuccess,
  registerSuccess,
  requestFaild,
  requestPending,
} from "./UserSlice";

export const loginAction = (form) => async (dispatch) => {
  try {
    //set loader
    dispatch(requestPending());

    //call axios
    const { status, message, user } = await loginUser(form);
    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFaild(message)) && toast[status](message);
  } catch (error) {
    dispatch(requestFaild(error));
  }
};

export const registerAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const { status, message } = await registerNewUser(form);
    status === "success"
      ? dispatch(registerSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFaild(message)) && toast[status](message);
  } catch (error) {
    dispatch(requestFaild(error));
  }
};
