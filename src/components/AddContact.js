import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {addContact} from '../redux/actions';
const AddContact = () => {
const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = (e) => {
      e.preventDefault();
      const new_contact = {
          id: Math.random(),
          name : name,
          phone : phone,
          email : email,
      }
       dispatch(addContact(new_contact));
  }


  return (
    <div className="border-0 card shadow">
      <div className="card-header">Add a contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={name}
              onChange={ (e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email Address"
              value={email}
              onChange={ (e)=> setEmail(e.target.value)}

            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone"
              value={phone}
              onChange={ (e)=> setPhone(e.target.value)}

            />
          </div>

          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
