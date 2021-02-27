import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import {
  selectAllContact,
  clearContact,
  deleteAllContact,
  // getAllContact,
} from "../redux/actions";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selContacts = useSelector((state) => state.contact.selectedContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllContact());

    if (selectAll) {
      let arr = contacts.map((contactSelected) => contactSelected.id);
      dispatch(selectAllContact(arr));
    } else {
      dispatch(clearContact());
    }
  }, [contacts, selectAll, dispatch]);

  const onDelete = () => {
    dispatch(deleteAllContact());
  };

  return (
    <>
      {selContacts.length ? <button onClick={onDelete}>Delete</button> : null}
      {contacts.length ? (
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox">
                  <input
                    id="selectAll"
                    type="checkbox"
                    className="custom-control-input"
                    value={selectAll}
                    onChange={() => setSelectAll(!selectAll)}
                  />
                  <label htmlFor="selectAll" className="custom-control-label" />
                </div>
              </th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contacts, index) => (
              <Contact contact={contacts} key={index} selectAll={selectAll} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>No contacts</div>
      )}
    </>
  );
};

export default Contacts;
