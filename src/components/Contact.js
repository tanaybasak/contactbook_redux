import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";

const Contact = ({ contact, selectAll }) => {
  const { name, email, phone, id } = contact;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" checked={selectAll} onChange = {(e) => console.log(e)} />
          <label className="custom-control-label" />
        </div>
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <a href={`/contacts/edit/${id}`} className="mr-2">
          <span className="material-icons">edit</span>
        </a>
          <span className="material-icons" style={{cursor : "pointer" }} onClick={() => dispatch(deleteContact(id))}>remove</span>
      </td>
    </tr>
  );
};

export default Contact;
