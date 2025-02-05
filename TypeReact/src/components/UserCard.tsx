import React from "react";

interface User{
    name: string;
    age: number;
    email?: string;
}
const UserCard: React.FC<User> = ({name, age, email}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        {email && <p>Email: {email}</p>}
    </div>
  )
}

export default UserCard