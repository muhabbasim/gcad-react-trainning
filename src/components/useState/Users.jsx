import React from 'react'
import {users} from '../../data/userData'
import UserCard from './UserCard'

export default function Users() {
  return (
    <div className="flex gap-10 flex-wrap">
      {users.slice(0, 4).map((user, i) => (
        <UserCard key={i} data={user}/>
      ))}
    </div>
  )
}
