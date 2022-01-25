import Link from "next/link";
import { useEffect, useState } from "react";

const Users = ({users}) => {
 
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


export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5000/users`)
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}