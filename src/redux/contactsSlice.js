export const contactsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case "contacts/addContact":
      return {
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export const addContact = (newContact) => {
  return {
    type: "contacts/addContact",
    payload: newContact,
  };
};
export const deleteContact = (id) => {
  return {
    type: "contacts/deleteContact",
    payload: id,
  };
};
