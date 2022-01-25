import Link from "next/link";
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
            <li>
                <Link href={`/users/${user.id}`}>               
                        <a>{user.name}</a>            
                </Link>
            </li>
        )}
      </ul>
  </div>
  )
};

export default Users;
