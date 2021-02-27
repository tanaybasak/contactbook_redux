import {
  CREATE_CONTACT,
  GET_CONTACT,
  // GET_ALL_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_ALL_CONTACT,
} from "./types";

// import axios from "axios";

// get all contact
/* export const getAllContact = () => async (dispatch) => {
  const result = await axios.get("https://api.mocki.io/v1/22755bc2");
  console.log(result);
  dispatch({
    type: GET_ALL_CONTACT,
    payload: result.data,
  });
}; */

/* export const addContact = (contact) => async (dispatch) => {
  
  call api

  dispatch({
    type: CREATE_CONTACT,
    payload: contact,
  });
}; */

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

//get a contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

//update a contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// clear data
export const clearContact = () => ({
  type: CLEAR_CONTACT,
});

// clear data
export const deleteAllContact = () => ({
  type: DELETE_ALL_CONTACT,
});
