import { getBook } from "../../helpers/axios";
import { getBookSuccess, requestFailed, requestPending } from "./BookSlice";

export const getBooksAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const response = await getBook();

    response.books
      ? dispatch(getBookSuccess(response.books))
      : dispatch(requestFailed({ message: "No books found!" }));
  } catch (error) {
    dispatch(requestFailed(error));
  }
};
