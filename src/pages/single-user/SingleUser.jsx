import React from 'react'
import { users } from '../../data/userData'
import { useParams } from 'react-router-dom'

export default function SingleUser() {

  const params = useParams()
  const userId = Number(params.user_id)
  const usersData = users

  const singleUser = usersData.find((user) => user.id === userId)

  return (
    <section>
      <div>name: {singleUser.name}</div>
      <div>email: {singleUser.email}</div>
      <div>
        <img src={singleUser.image} alt="user_image" />
      </div>
    </section>
  )
}
