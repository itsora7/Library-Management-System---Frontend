import axios from "axios";

const baseApiURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : process.env.REACT_APP_ROOT_URL;

const userEp = baseApiURL + "/user";
const bookEp = baseApiURL + "/book";
const transactionEp = baseApiURL + "/transaction";

//user
const getUserFromSessionStorage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return user?._id;
  }
  return;
  //
};
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

// Book
export const addBook = async (bookInfo) => {
  try {
    const userID = getUserFromSessionStorage();
    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.post(bookEp, bookInfo, {
      headers: {
        Authorization: userID,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getBook = async () => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.get(bookEp, {
      headers: {
        Authorization: userID,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const borrowBook = async (bookID) => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.post(
      bookEp + "/borrow",
      { bookID },
      {
        headers: {
          Authorization: userID,
        },
      }
    );

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deleteBook = async (bookID) => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.delete(bookEp, {
      data: { bookID },

      headers: {
        Authorization: userID,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getBorrowedBooks = async (bookID) => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.get(bookEp + "/borrowedByUser", {
      headers: {
        Authorization: userID,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const returnBook = async (bookID) => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.patch(
      bookEp + "/return",
      { bookID },
      {
        headers: {
          Authorization: userID,
        },
      }
    );

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//transaction
export const getAllTransactions = async () => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.get(transactionEp, {
      headers: {
        Authorization: userID,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updatePassword = async (passInfo) => {
  try {
    const userID = getUserFromSessionStorage();

    if (!userID) {
      return {
        status: "error",
        message: "Please login first",
      };
    }
    const { data } = await axios.patch(userEp + "/password-update", passInfo, {
      headers: {
        Authorization: userID,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
