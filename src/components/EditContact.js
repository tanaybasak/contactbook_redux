import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContact,updateContact } from "../redux/actions";
import { useHistory } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const contact = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [dispatch, contact, id]);

  const onUpdateContact = (e) => {
    e.preventDefault();
      const update_contact = {...contact, ...{name: name, phone: phone, email:email} };
    dispatch(updateContact(update_contact));
    history.push("/");
  };

  return (
    <div className="border-0 card shadow">
      <div className="card-header">Add a contact</div>
      <div className="card-body">
        <form onSubmit={e => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
