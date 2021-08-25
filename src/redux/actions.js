import shortId from "shortid";
import types from "./types";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: shortId.generate(),
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
