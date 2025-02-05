import React, { useRef, useState } from "react";
// import { users } from '../utils/userData';
import { Link } from "react-router";
import adduser from "../styles/adduser.module.css"

const AddUser = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userName")) || []
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleForm = () => {
    const col =
      users.length < 9 ? "0" + (users.length + 1) : String(users.length + 1);

    setUsers([
      ...users,
      {
        id: users.length + 1,
        col1: col,
        col2: firstName,
        col3: lastName,
        col4: email,
        col5: address,
        col6: "remove",
      },
    ]);
    localStorage.setItem("userName", JSON.stringify(users));
  };
  return (
    <div className={adduser.bg}>
      <div className={adduser.wrapper}>
        <div className={adduser.bgForm}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Add Address"
        ></textarea>
        <button onClick={handleForm}>Add User</button>
        </div>
      </div>
      <Link to="/users">See All Users</Link>
    </div>
  );
};

export default AddUser;
