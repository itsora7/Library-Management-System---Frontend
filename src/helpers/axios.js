import axios from "axios";

const baseApiURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;

const userEp = baseApiURL + "/user";

//user

// register user
export const registerNewUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userEp + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
