import { useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
    ])
  return (
  <div>
      <h1>Users list</h1>
      <ul>
          {users.map(user =>
            <li>{user.name}</li>
        )}
      </ul>
  </div>
  )
};

export default Users;
