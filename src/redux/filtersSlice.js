export const filterReducer = (
  state = {
    name: "",
  },
  action
) => {
  switch (action.type) {
    case "filters/changeFilter":
      return {
        ...state.filters,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const changeFilter = (value) => {
  return {
    type: "filters/changeFilter",
    payload: value,
  };
};
