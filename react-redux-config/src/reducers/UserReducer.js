const initialState = {
  firstName: "learninjava",
  lastName: "dotcom"
};

function UserReducer(state = initialState, action) {
  console.log("In action " + JSON.stringify(action));
  switch (action.type) {
    case "GET_USER":
      return { ...state };
    case "ADD_USER":
      return { ...action.payload };
    case "DEL_USER":
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export default UserReducer;
