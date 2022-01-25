import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
    ])

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/users`)
        const data = await response.json()
        setUsers(data)
    }, [])
  return (
  <div>
      <h1>Users list</h1>
      <ul>
          {users.map(user =>
            <li key={user.id}>
                <Link  href={`/users/${user.id}`}>               
                        <a>{user.name}</a>            
                </Link>
            </li>
        )}
      </ul>
  </div>
  )
};

export default Users;
