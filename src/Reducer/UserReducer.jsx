export const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return localStorage.setItem("logged", JSON.stringify(action.payload));

    default:
      return state;
  }
};
