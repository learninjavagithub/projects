const GET_USER = "GET_USER";
const ADD_USER = "ADD_USER";
const DEL_USER = "DEL_USER";

const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER
    });
  };
};

const addUser = USER => {
  return dispatch => {
    dispatch({
      type: ADD_USER,
      payload: USER
    });
  };
};

const delUser = () => {
  return dispatch => {
    dispatch({
      type: DEL_USER
    });
  };
};

export { getUser, addUser, delUser };
